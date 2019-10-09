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

const basket = document.querySelector("#basket");
const info = document.querySelector("#info");
const billing = document.querySelector("#billing");
const nodisplay = document.querySelector(".nodisplay");

breadcrumb();

document.querySelector(".basket_submit").addEventListener("click", displayInfo);
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
    arrow.style.left = "40px";
  }
  if (info == display) {
    document.querySelector(".breadcrumb_step1").classList.remove("breadcrumb_current");
    document.querySelector(".breadcrumb_step2").classList.add("breadcrumb_current");
    arrow.style.left = "140px";
  }
  if (billing == display) {
    document.querySelector(".breadcrumb_step2").classList.remove("breadcrumb_current");
    document.querySelector(".breadcrumb_step3").classList.add("breadcrumb_current");
    arrow.style.left = "280px";
  }
}
