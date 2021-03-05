// Filter table

let input = document.getElementById("filter-input");
let t_body = document.getElementById("table-body");
let tr = t_body.getElementsByTagName("tr");

input.addEventListener("keyup", () => {
    let filter = input.value.toUpperCase();

    for (var i = 0; i < tr.length; i++) {
        if (tr[i].textContent.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        }
        else {
            tr[i].style.display = "none";
        }
    }
    
    check_shown();
});

function check_shown() {
    let shown_count = 0;       
    let found = document.querySelector(".filter_info");
    
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].style.display == "") {
            shown_count++;
        }    
    }
    if (shown_count == 0) {
        found.classList.add("show");
    }    
    else{
        found.classList.remove("show");
    }
}