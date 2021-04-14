var back_to_top = document.querySelector(".back-to-top");

window.addEventListener("scroll", (event) => {
    back_to_top.classList.toggle("active", pageYOffset > 0);
});

back_to_top.addEventListener("click", (event) => {
    window.scrollTo(0, 0);
});

window.addEventListener("load", (event) => {
    var heart = document.querySelectorAll(".fa-heart");

    heart.forEach((like) => {
        like.addEventListener("click", () => {
            like.classList.toggle("active");
        });
    });
});

var header = document.querySelector(".site-header .container");

window.addEventListener("scroll", (event) => {
    header.classList.toggle("fixed", window.scrollY > 0);
});

var dropper = document.querySelectorAll(".dropper");
var nav_drop = document.querySelectorAll(".nav-drop-list");
let drop_icon = document.querySelectorAll(".nav-link .icon");

dropper.forEach(function (drop, index) {
    drop.addEventListener("click", () => {
        nav_drop.forEach(function (item, item_index) {
            if (index == item_index) {
                item.classList.toggle("active");
                drop.classList.toggle("dropped");
                drop_icon[index].classList.toggle("active");
            }
        });
    });
});

let category_btn = document.querySelector(".shopper");
let category_drop = document.querySelector(".shopper-drop");

category_btn.addEventListener("click", () => {
    category_drop.classList.toggle("active");
});

let menu = document.querySelector(".menu");
let menu_icon = menu.querySelector(".icon");
let nav_bar = document.querySelector(".nav-bar");

menu.addEventListener("click", () => {
    nav_bar.classList.toggle("active");
    if(menu_icon.classList.contains("fa-bars")){
        menu_icon.classList.toggle("fa-times");
    }
});