let ul = document.querySelector(".tabs");
ul.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("tabs-title")) {
        document.querySelector(".tabs-title.active").classList.remove("active");
        document.querySelector(".tabs-content .active").classList.remove("active");
        document.querySelector(`#${ev.target.dataset.tabid}`).classList.add("active");
        ev.target.classList.add("active");
    }

});

const images = document.querySelectorAll(".card");
const btn = document.querySelector(".load_more");
const currentImg = 12;
btn.addEventListener("click", function () {
    for (let i = currentImg; i < currentImg + 12; i++) {
        if (images[i]) {
            images[i].classList.add("active");
        }
    }
    btn.remove();
});

document.querySelector(".checkbox_section").addEventListener("click", function (event) {
    if (event.target && event.target.matches("input[name='domain']")) {
        const checkValue = document.querySelector("input[name=\"domain\"]:checked").value;
        console.log(checkValue);
        const cards = document.querySelectorAll(".card");
        cards.forEach((el, index) => {
            // el.style.display = el.classList.contains(checkValue) ? "block" : "none";

            if (el.classList.contains(checkValue) || checkValue==='all') {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
    }
});


