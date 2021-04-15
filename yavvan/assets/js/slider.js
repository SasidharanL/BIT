const page_slider = document.querySelector("#slider");
const slides = page_slider.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () =>
        i == 0 ? gotoPrev() : gotoNext()
    );
}

const gotoPrev = () =>
    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () =>
    current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = (number) => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
};

function auto_slider() {
    current = current + 1;

    if (current >= slides.length) {
        current = 0;
    }

    gotoNum(current);

}

var interval = setInterval(auto_slider, 7000);

page_slider.addEventListener("mouseover", () => {
    clearInterval(interval);
    // console.log("Mouseover");
});

page_slider.addEventListener("mouseout", () => {
    interval = setInterval(auto_slider, 7000);
    // console.log("Mouseout");
});

console.log(slides.length - 1);
