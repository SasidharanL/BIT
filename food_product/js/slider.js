let slides = document.querySelectorAll(".slide");

let totalSlides = slides.length;
console.log(totalSlides);

let active = 0;
let activeSlide = 0;

let prev = document.querySelector(".nav-prev");
let next = document.querySelector(".nav-next");

function updatePosition(current) {
    let previous = current - 1;
    if(previous < 0) previous = totalSlides - 1;

    let nextslide = current + 1;
    if(nextslide > totalSlides -1) nextslide = 0;

    slides.forEach((slide) => {
        slide.classList.remove("active");
        slide.classList.remove("prev");
        slide.classList.remove("next");
    });

    slides[current].classList.add("active");
    slides[previous].classList.add("prev");
    slides[nextslide].classList.add("next");

}

prev.addEventListener("click", prevSlide);

function prevSlide() {
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = totalSlides - 1;
    }
    updatePosition(activeSlide);
}

next.addEventListener("click", nextSlide);

function nextSlide() {
    activeSlide++;

    if(activeSlide > totalSlides -1){
        activeSlide = 0;
    }
    updatePosition(activeSlide);
}
