document.querySelector(".open_popup").addEventListener("click", openPopup);
let mql = window.matchMedia("(min-width: 600px)");

function openPopup() {
  if (mql.matches) {
    // If media query matches
    document.querySelector("#popup").style.right = "0";
  } else {
    document.querySelector("#popup").style.top = "0";
  }

  document.querySelector(".close_popup").addEventListener("click", closePopup);
  sizeSettings();
}

function closePopup() {
  if (mql.matches) {
    // If media query matches
    document.querySelector("#popup").style.right = "-400px";
  } else {
    document.querySelector("#popup").style.top = "100vh";
  }
}

const buttons = document.querySelectorAll(".size_button");

function sizeSettings() {
  buttons.forEach(button => {
    button.addEventListener("click", nextPage);
  });
}

function nextPage() {
  let selectedSize = event.target.value;
  document.querySelector(".popup_product_image").classList.add("changed_image");
  document.querySelector(".size_selector").classList.add("popup_fade_out");
  document.querySelector(".select_wrapper").classList.add("popup_fade_in");

  document.querySelector("#size-select").value = selectedSize;
  document.querySelector("#size-select").classList.add("popup_fade_in");
  document.querySelector(".popup_fade_in").addEventListener("animationend", showNextPageContent);
}

function showNextPageContent() {
  document.querySelector(".size_selector").style.display = "none";
}

const radios = document.forms["formA"].elements["offers"];

for (radio in radios) {
  radios[radio].onclick = function() {
    let radioValue = event.target.value;

    if (radioValue == "offer1") {
      document.querySelector(`.${radioValue}`).textContent = "Dit valg";
      document.querySelector(`.offer2`).textContent = "Mest populære";
      document.querySelector(`.offer2`).style.color = "black";
      document.querySelector(`.offer2`).style.color = "#5c1182";
    }

    if (radioValue == "offer2") {
      document.querySelector(`.${radioValue}`).textContent = "Dit valg";
      document.querySelector(`.${radioValue}`).style.color = "black";

      document.querySelector(`.offer1`).textContent = "";
      document.querySelector(`.offer3`).textContent = "";
    }

    if (radioValue == "offer3") {
      document.querySelector(`.${radioValue}`).textContent = "Dit valg";
      document.querySelector(`.offer1`).textContent = "";
      document.querySelector(`.offer2`).textContent = "Mest populære";
      document.querySelector(`.offer2`).style.color = "#5c1182";
    }

    document.querySelector(".go_to_basket").addEventListener("click", goToBasket);
  };
}

function goToBasket() {
  let selected_size = document.querySelector("#size-select").value;
  let selected_offer = document.querySelector('input[name="offers"]:checked').value;

  localStorage.setItem("size", selected_size);
  localStorage.setItem("offer", selected_offer);
}
