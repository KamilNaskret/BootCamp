// Variables
const images = [...document.querySelectorAll(".faces")];
const p = [...document.querySelectorAll(".desc")];
const h2 = [...document.querySelectorAll(".h2")];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let indexShow;
let indexSlider;

const changeSlider = () => {
    images.forEach((element,index) => {
        if(element.classList.contains("show")){
            indexShow=index;
        }
    })
    indexShow===0?indexSlider=1:indexSlider=0;
    images[indexSlider].classList.toggle("show");
    images[indexShow].classList.toggle("show");
    p[indexSlider].classList.toggle("show");
    p[indexShow].classList.toggle("show");
    h2[indexSlider].classList.toggle("show");
    h2[indexShow].classList.toggle("show");
}

prev.addEventListener("click",changeSlider);
next.addEventListener("click",changeSlider)