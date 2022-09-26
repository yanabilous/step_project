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
        const cards = document.querySelectorAll(".card");
        cards.forEach((el, index) => {
            if (el.classList.contains(checkValue) || checkValue === "all") {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
    }
});
// __________________________________

let slider = document.querySelector(".carousel_img");


slider.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("slider_img")) {
        document.querySelector(".carousel_img img.active").classList.remove("active");
        document.querySelector(".testimonial.active").classList.remove("active");
        document.querySelector(`#${ev.target.dataset.imgid}`).classList.add("active");
        ev.target.classList.add("active");

    }
});


const imgLength = document.querySelectorAll(".slider_img").length;
let imagesSlider = document.querySelectorAll(".carousel_img img");
document.querySelector(".arrowLeft").style.display = "none";

document.querySelector(".arrowLeft").addEventListener("click", function (ev) {
    for (let i = 0; i < imagesSlider.length; i++) {
        if (imagesSlider[i].classList.contains("active")) {
            imagesSlider[i].classList.remove("active");
            imagesSlider[i - 1].classList.add("active");
            document.querySelector(".testimonial.active").classList.remove("active");
            document.querySelector(`.testimonial:nth-child(${i})`).classList.add("active");
            toggleArrows(i - 1);
            return;

        }

    }
});


document.querySelector(".arrowRight").addEventListener("click", function (ev) {
    for (let i = 0; i < imagesSlider.length; i++) {
        if (imagesSlider[i].classList.contains("active")) {
            imagesSlider[i].classList.remove("active");
            imagesSlider[i + 1].classList.add("active");
            document.querySelector(".testimonial.active").classList.remove("active");
            document.querySelector(`.testimonial:nth-child(${i + 2})`).classList.add("active");
            toggleArrows(i + 1);
            return;
        }
    }
});


function toggleArrows(i) {
    if (i === 0) {
        document.querySelector(".arrowLeft").style.display = "none";
        document.querySelector(".arrowRight").style.display = "block";
    } else if (i === imgLength - 1) {
        document.querySelector(".arrowRight").style.display = "none";
        document.querySelector(".arrowLeft").style.display = "block";
    } else {
        document.querySelector(".arrowLeft").style.display = "block";
        document.querySelector(".arrowRight").style.display = "block";
    }
}
