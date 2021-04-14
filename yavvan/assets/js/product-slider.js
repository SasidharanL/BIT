let slider = document.querySelectorAll(".shop-slider");

for (let i = 0; i < slider.length; i++) {
    let translated = 0;
    let slide_wrapper = slider[i].querySelector("ul");

    let products = slider[i].querySelectorAll("ul .product");
    var count = products.length;

    console.log(count);

    let left = slider[i].querySelector(".left");

    console.log()
    let right = slider[i].querySelector(".right");

    console.log(slide_wrapper.offsetWidth);

    left.addEventListener("click", ()=>{
        if(translated > 0){
            translated -= 220;
        }
                
        slide_wrapper.style.left= `-${translated}px`;
    });

    right.addEventListener("click", () => {
        if (translated < slide_wrapper.offsetWidth - 440) {
            translated += 220;
        }

        slide_wrapper.style.left = `-${translated}px`;
    });
}