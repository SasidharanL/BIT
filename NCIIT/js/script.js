let menu_btn = document.querySelector(".menu-btn");
let nav = document.querySelector(".nav-list");
let menu_icon = document.querySelector(".fa-bars");

menu_btn.addEventListener("click", (event) => {
    menu_btn.classList.toggle("active");
    nav.classList.toggle("open");
    menu_icon.classList.toggle("fa-xmark");
});


var header = document.querySelector("header");

window.addEventListener("scroll", (event) => {
    header.classList.toggle("sticky", window.scrollY > 0);
});