// preloader
var preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {
    preloader.classList.add('loaded');
    document.body.style.overflowY = "scroll";
});

// responsive nav
let menu_btn = document.querySelector(".menu-btn");
let nav = document.querySelector(".nav-list");
let menu_icon = document.querySelector(".fa-bars");

menu_btn.addEventListener("click", (event) => {
    menu_btn.classList.toggle("active");
    nav.classList.toggle("open");
    menu_icon.classList.toggle("fa-xmark");
});

// fixed nav
var header = document.querySelector("header");

window.addEventListener("scroll", (event) => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// accredion
let accredion = document.querySelector(".accredion") || undefined;
let accredion_btn = document.querySelector(".accredion-btn") || undefined;
let accredion_icon = document.querySelector(".fa-circle-plus") || undefined;
let accredion_text = document.querySelector(".accredion-text") || undefined;

if (accredion_btn != undefined) {
    accredion_btn.addEventListener("click", () => {
        accredion.classList.toggle("active");

        if (accredion.classList.contains("active")) {
            accredion.style.maxHeight = accredion.scrollHeight + "px";
        } else {
            accredion.style.maxHeight = null;
        }

        if (accredion_icon.classList.contains("fa-circle-plus")) {
            accredion_icon.classList.replace("fa-circle-plus", "fa-circle-minus");
            accredion_text.textContent = "less";
        } else {
            accredion_icon.classList.replace("fa-circle-minus", "fa-circle-plus");
            accredion_text.textContent = "more";
        }
    });
}