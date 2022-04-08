let accredion = document.querySelector(".accredion");
let accredion_btn = document.querySelector(".accredion-btn");
let accredion_icon = document.querySelector(".fa-circle-plus");
let accredion_text = document.querySelector(".accredion-text");


accredion_btn.addEventListener("click", () => {
    accredion.classList.toggle("active");

    if(accredion_icon.classList.contains("fa-circle-plus")){
        accredion_icon.classList.replace("fa-circle-plus", "fa-circle-minus");
        accredion_text.textContent = "less";
    } else{
        accredion_icon.classList.replace("fa-circle-minus", "fa-circle-plus");
        accredion_text.textContent = "more";
    }
});