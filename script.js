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
