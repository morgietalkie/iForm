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
const basket = document.querySelector("#basket");
const info = document.querySelector("#info");
const billing = document.querySelector("#billing");
const nodisplay = document.querySelector(".nodisplay");

breadcrumb();

document.querySelector(".gotodelivery").addEventListener("click", displayInfo);
document.querySelector("#customer_form").addEventListener("submit", function(event) {
  event.preventDefault();
  displayBilling();
});

function displayInfo() {
  basket.classList.remove("display");
  info.classList.add("display");
  basket.classList.add("nodisplay");
  info.classList.remove("nodisplay");
  breadcrumb();
}

function displayBilling() {
  console.log("haaaayyoo");
  info.classList.remove("display");
  billing.classList.add("display");
  info.classList.add("nodisplay");
  billing.classList.remove("nodisplay");
  breadcrumb();
}

function breadcrumb() {
  let display = document.querySelector(".display");
  let arrow = document.querySelector(".breadcrumb_arrow");

  console.log(display);
  if (basket == display) {
    document.querySelector(".breadcrumb_step1").classList.add("breadcrumb_current");
  }
  if (info == display) {
    document.querySelector(".breadcrumb_step1").classList.remove("breadcrumb_current");
    document.querySelector(".breadcrumb_step2").classList.add("breadcrumb_current");
  }
  if (billing == display) {
    document.querySelector(".breadcrumb_step2").classList.remove("breadcrumb_current");
    document.querySelector(".breadcrumb_step3").classList.add("breadcrumb_current");
  }
}
