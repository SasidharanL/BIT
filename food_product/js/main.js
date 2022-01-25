function addToCart(product) {
    let cartItems = localStorage.getItem("Products");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product,
            };
        }
        cartItems[product.id].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.id]: product,
        };
    }

    localStorage.setItem("Products", JSON.stringify(cartItems));

    totalCost(product);
}

function OnLoadCartNum() {
    let Incart = localStorage.getItem("InCart");

    if (Incart) {
        cartNum.textContent = Incart;
    }
}

function cart_num() {
    let Incart = localStorage.getItem("InCart");
    Incart = parseInt(Incart);

    if (Incart) {
        localStorage.setItem("InCart", Incart + 1);
        cartNum.textContent = Incart + 1;
    } else {
        localStorage.setItem("InCart", 1);
        cartNum.textContent = 1;
    }
}

function totalCost(product) {
    let cartCost = localStorage.getItem("TotalCost");

    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("TotalCost", cartCost + product.price);
    } else {
        localStorage.setItem("TotalCost", product.price);
    }
}

function OnLoadPrice() {
    let total_price = document.getElementById("cart_price");

    let cartCost = localStorage.getItem("TotalCost");
    cartCost = parseFloat(cartCost).toFixed(2);

    if (cartCost != null && total_price) {
        total_price.textContent = cartCost;
    }
}

let incart = document.querySelector("#cart_inCart");

function totalQuantity() {
    let availableItem = localStorage.getItem("Products");
    availableItem = JSON.parse(availableItem);
    var total = 0;

    if (availableItem && incart) {
        incart.innerHTML = "";
        Object.values(availableItem).map((item) => {
            total += item.inCart;
        });

        incart.innerHTML = total;
    }
}

function displayItems() {
    let cart_shower = document.querySelector(".cart-items"),
        availableItem = localStorage.getItem("Products");
    availableItem = JSON.parse(availableItem);

    if (availableItem && cart_shower) {
        cart_shower.innerHTML = "";
        Object.values(availableItem).map((item) => {
            var price = item.price;
            price = price * item.inCart;
            price = parseFloat(price).toFixed(2);

            cart_shower.innerHTML += `
                <div class="product" id="${item.id}">
                    <i class="fas fa-times icon deleteItem"></i>
                    <div class="img-box">
                        <img src="./images/${item.src}" alt="" class="img-fluid">
                    </div>
                    <div class="CartName">${item.name}</div>
                    <div class="CartQuantity">
                        <i class="fas fa-minus subQuantity icon"></i>
                        <span>${item.inCart}</span>
                        <i class="fas fa-plus addQuantity icon"></i>
                    </div>
                    <div clsss="CartPrice">${price}<div>
                </div>  
            `;
        });
    }
}

displayItems();
OnLoadCartNum();
OnLoadPrice();
totalQuantity();

let deleteBtn = document.querySelectorAll(".deleteItem");

deleteBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let cartAvail = JSON.parse(localStorage.getItem("Products"));
        let itemfind = btn.parentNode.id;
        deleteItem(itemfind, cartAvail);
    });
});

function deleteItem(cart, localCart) {
    console.log(cart);
    let price = 0,
        incart = 0;
    Object.values(localCart).map((item) => {
        if (cart == item.id) {
            delete localCart[cart];
        } else {
            price += item.price * item.inCart;
            incart += item.inCart;
        }
    });
    localStorage.setItem("TotalCost", price);
    localStorage.setItem("InCart", incart);
    localStorage.setItem("Products", JSON.stringify(localCart));
    document.location.reload();
}

let subQuantity = document.querySelectorAll(".subQuantity");
subQuantity.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.parentNode.children[1].textContent > 1) {
            let cartAvail = JSON.parse(localStorage.getItem("Products"));
            let cartId = btn.parentNode.parentNode.id;
            ChangeQuantity(-1, cartId, cartAvail);
        }
    });
});

let addQuantity = document.querySelectorAll(".addQuantity");
addQuantity.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.parentNode.children[1].textContent < 20) {
            let cartAvail = JSON.parse(localStorage.getItem("Products"));
            let cartId = btn.parentNode.parentNode.id;
            ChangeQuantity(1, cartId, cartAvail);
        }
    });
});

function ChangeQuantity(num, id, cart) {
    let Incart = parseInt(localStorage.getItem("InCart"));
    Incart = Incart + num;
    localStorage.setItem("InCart", Incart);

    cart[id].inCart += num;
    localStorage.setItem("Products", JSON.stringify(cart));

    let price = 0;
    let cartProducts = JSON.parse(localStorage.getItem("Products"));
    Object.values(cartProducts).map((item) => {
        price += item.inCart * item.price;
    });

    localStorage.setItem("TotalCost", price);
    document.location.reload();
}
