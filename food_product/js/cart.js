var products = document.querySelectorAll(".card"),
    cart_btn = document.querySelectorAll(".cart-btn"),
    cartNum = document.querySelector(".cart-num span");

// creating id for each products dynamically

products.forEach(function (product, index) {
    product.id =
        product
            .querySelector(".text-content h3")
            .textContent.toLowerCase()
            .replace(/\s+/g, "-") +
        "-" +
        index;
});

// adding click action for add to cart button

cart_btn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        getDetails(index);
    });
});

// getting product details

function getDetails(index) {
    var price = products[index].querySelector(".price-card span").textContent;
    var finalprice = price.slice(2);
    let details = {
        id: products[index].id,
        name: products[index].querySelector(".text-content h3").textContent,
        src: products[index].querySelector("img").src.split("/").pop(),
        price: parseFloat(finalprice),
        inCart: 0,
    };

    cartNumber(details);
    totalCost(details);
}

// number of products in cart is updated

function OnLoadCartNummber() {
    let InCart = localStorage.getItem("InCart");

    if (InCart) {
        cartNum.textContent = InCart;
    }
}

function cartNumber(product, manager) {
    let InCart = parseInt(localStorage.getItem("InCart"));

    if (manager) {
        localStorage.setItem("InCart", InCart - 1);
        cartNum.textContent = InCart - 1;
    } else if (InCart) {
        localStorage.setItem("InCart", InCart + 1);
        cartNum.textContent = InCart + 1;
    } else {
        localStorage.setItem("InCart", 1);
        cartNum.textContent = 1;
    }

    addToCart(product);
}

function addToCart(product) {
    let CartItems = JSON.parse(localStorage.getItem("Products"));

    if (CartItems != null) {
        let currentProduct = product.id;

        if (CartItems[currentProduct] == undefined) {
            CartItems = {
                ...CartItems,
                [currentProduct]: product,
            };
        }

        CartItems[currentProduct].inCart += 1;
    } else {
        product.inCart = 1;
        CartItems = {
            [product.id]: product,
        };
    }

    localStorage.setItem("Products", JSON.stringify(CartItems));
}

function totalCost(product, manager) {
    let cost = localStorage.getItem("TotalCost");

    if (manager) {
        cost = parseInt(cost);
        localStorage.setItem("TotalCost", cost - product.price);
    } else if (cost != null) {
        cost = parseInt(cost);
        localStorage.setItem("TotalCost", cost + product.price);
    } else {
        localStorage.setItem("TotalCost", product.price);
    }
}

function displayItems() {
    let CartItems = JSON.parse(localStorage.getItem("Products"));
    let cost = parseInt(localStorage.getItem("TotalCost"));
    let InCart = localStorage.getItem("InCart");

    let productContainer = document.querySelector(".cart-items");

    if (CartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(CartItems).map((item) => {
            productContainer.innerHTML += `
                <div class="product" id="${item.id}">
                    <i class="fas fa-times deleteItem"></i>
                    <div class="img-box">
                        <img src="./images/${
                            item.src
                        }" alt="" class="img-fluid">
                    </div>
                    <div class="CartName">${item.name}</div>
                    <div class="CartQuantity">
                        <i class="fas fa-minus decrease"></i>
                        <span>${item.inCart}</span>
                        <i class="fas fa-plus increase"></i>
                    </div>
                    <div clsss="CartPrice">${item.price * item.inCart}<div>
                </div>  
            `;
        });

        let productPrice = document.querySelector(".cart-total-price");
        productPrice.innerHTML = cost;
        let productQuantity = document.querySelector(".cart-total-quantity");
        productQuantity.innerHTML = InCart;

        deleteItems();
        manageQuantity();
    }
}

function manageQuantity() {
    let minusBtns = document.querySelectorAll(".decrease");
    let plusBtns = document.querySelectorAll(".increase");

    let CurrentQuantity = 0;
    let CurrentProduct = "";

    let CartItems = JSON.parse(localStorage.getItem("Products"));

    for (let i = 0; i < minusBtns.length; i++) {
        minusBtns[i].addEventListener("click", () => {
            CurrentQuantity =
                minusBtns[i].parentElement.querySelector("span").textContent;
            CurrentProduct = minusBtns[i].parentElement.parentElement.id;

            if (CartItems[CurrentProduct].inCart > 1) {
                CartItems[CurrentProduct].inCart -= 1;
                cartNumber(CartItems[CurrentProduct], true);
                totalCost(CartItems[CurrentProduct], true);

                localStorage.setItem("Products", JSON.stringify(CartItems));
                displayItems();
            }
        });

        plusBtns[i].addEventListener("click", () => {
            CurrentQuantity =
                minusBtns[i].parentElement.querySelector("span").textContent;
            CurrentProduct = plusBtns[i].parentElement.parentElement.id;

            CartItems[CurrentProduct].inCart += 1;
            cartNumber(CartItems[CurrentProduct]);
            totalCost(CartItems[CurrentProduct]);

            localStorage.setItem("Products", JSON.stringify(CartItems));
            displayItems();
        });
    }
}

function deleteItems() {
    let deleteBtns = document.querySelectorAll(".deleteItem");
    let InCart = localStorage.getItem("InCart");
    let cost = localStorage.getItem("TotalCost");
    let CartItems = JSON.parse(localStorage.getItem("Products"));
    let productId;

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", () => {
            productId = deleteBtns[i].parentElement.id;

            localStorage.setItem(
                "InCart",
                InCart - CartItems[productId].inCart
            );
            localStorage.setItem(
                "TotalCost",
                cost - CartItems[productId].price * CartItems[productId].inCart
            );

            delete CartItems[productId];
            localStorage.setItem("Products", JSON.stringify(CartItems));

            displayItems();
            OnLoadCartNummber();
        });
    }
}

OnLoadCartNummber();
displayItems();
