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

var btns = document.querySelectorAll(".btn");
var nav = document.querySelector(".nav-bar");
var menu_open = document.querySelector(".menu-open-toggler");
var menu_close = document.querySelector(".menu-close-toggler");

btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        btns.forEach(btnactive => {
            btnactive.classList.remove("active");
        });
        nav.classList.toggle("open");
        btn.classList.add("active");
    });
});

var drop_down = document.querySelectorAll("#drop-wrapper");
var drop = document.querySelectorAll(".drop-down");

var drop_icon = document.querySelectorAll("#drop-wrapper label i");

// drop_down.addEventListener("click", (event) => {
// 	drop.classList.toggle("open");
// });

drop_down.forEach(function(drop_menu, drop_index) {
    drop_menu.addEventListener("click", function() {
        drop.forEach(function(drop_item, index) {
            if (drop_item.classList.contains("open")) {
                drop_item.classList.remove("open");
            } else {
                if (index == drop_index) {
                    drop_item.classList.add("open");
                } else {
                    drop_item.classList.remove("open");
                }
            }
        });
        drop_icon.forEach(function(icon, icon_index) {
            icon.style.transition = "200ms ease-in-out";
            if (icon.classList.contains("active")) {
                icon.classList.remove("active");
            } else {
                if (icon_index == drop_index) {
                    icon.classList.add("active");
                } else {
                    icon.classList.remove("active");
                }
            }

            if (icon.classList.contains("active")) {
                icon.style.transform = "rotate(180deg)";
            } else {
                icon.style.transform = "rotate(0deg)";
            }
        });
    });
});
