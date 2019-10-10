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

function start() {
  let localOffer = localStorage.getItem("offer");
  if (localOffer == "offer1") {
    document.querySelector(".chosen-offer").textContent = "4 numre af iFORM";
  }
  if (localOffer == "offer2") {
    document.querySelector(".chosen-offer").textContent = "6 numre af iFORM";
  }
  if (localOffer == "offer3") {
    document.querySelector(".chosen-offer").textContent = "8 numre af iFORM";
  }

  if (localOffer == "offer1") {
    document.querySelector(".chosen-offer2").textContent = "4 numre af iFORM";
  }
  if (localOffer == "offer2") {
    document.querySelector(".chosen-offer2").textContent = "6 numre af iFORM";
  }
  if (localOffer == "offer3") {
    document.querySelector(".chosen-offer2").textContent = "8 numre af iFORM";
  }

  if (localOffer == "offer1") {
    document.querySelector(".discount").textContent = "761 kr.";
  }

  if (localOffer == "offer1") {
    document.querySelector(".local-price1").textContent = "149 kr.";
  }

  if (localOffer == "offer1") {
    document.querySelector(".local-price2").textContent = "198,50 kr.";
  }

  if (localOffer == "offer1") {
    document.querySelector(".local-price3").textContent = "198,50 kr.";
  }

  if (localOffer == "offer2") {
    document.querySelector(".discount").textContent = "866 kr.";
  }

  if (localOffer == "offer2") {
    document.querySelector(".local-price1").textContent = "199 kr.";
  }

  if (localOffer == "offer2") {
    document.querySelector(".local-price2").textContent = "248,50 kr.";
  }

  if (localOffer == "offer2") {
    document.querySelector(".local-price3").textContent = "248,50 kr.";
  }

  if (localOffer == "offer3") {
    document.querySelector(".discount").textContent = "921 kr.";
  }

  if (localOffer == "offer3") {
    document.querySelector(".local-price1").textContent = "299 kr.";
  }

  if (localOffer == "offer3") {
    document.querySelector(".local-price2").textContent = "348,50 kr.";
  }

  if (localOffer == "offer3") {
    document.querySelector(".local-price3").textContent = "348,50 kr.";
  }

  let localSize = localStorage.getItem("size");
  if (localSize == "small") {
    document.querySelector(".chosen-size").textContent = "Størrelse: Small";
  }
  if (localSize == "medium") {
    document.querySelector(".chosen-size").textContent = "Størrelse: Medium";
  }
  if (localSize == "large") {
    document.querySelector(".chosen-size").textContent = "Størrelse: Large";
  }
  if (localSize == "extra-large") {
    document.querySelector(".chosen-size").textContent = "Størrelse: XL";
  }

  if (localSize == "small") {
    document.querySelector(".chosen-size2").textContent = "Størrelse: Small";
  }
  if (localSize == "medium") {
    document.querySelector(".chosen-size2").textContent = "Størrelse: Medium";
  }
  if (localSize == "large") {
    document.querySelector(".chosen-size2").textContent = "Størrelse: Large";
  }
  if (localSize == "extra-large") {
    document.querySelector(".chosen-size2").textContent = "Størrelse: XL";
  }
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

function addOffer() {}
