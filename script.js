"use strict";

document.addEventListener("DOMContentLoaded", start);

const burgerMenu = document.querySelector("#burger_menu");
document.querySelector("#burger_button").addEventListener("click", openSidebar);

function openSidebar() {
  console.log("Burgermenu toggled");

  if (!(burgerMenu.style.display == "block")) {
    burgerMenu.style.display = "block";
  } else {
    burgerMenu.style.display = "none";
  }
}

function start() {}

// Christians slide snuppet fra https://www.w3schools.com/howto/howto_js_slideshow.asp
document.querySelector(".next").addEventListener("click", () => plusSlides(1));
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
const dots = document.querySelectorAll(".dot");
dots.forEach(d => {
  d.addEventListener("click", e => {
    currentSlide(e.target.dataset.index);
  });
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
