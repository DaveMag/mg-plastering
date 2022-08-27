// Hamburger dropdown menu for width below 680px

const hamburgerMenu = document.querySelector(".hamburger-wrap");
const hamburger = document.querySelector(".hamburger");
const newMenu = document.querySelector(".hamburger-menu");
const hamBtn = document.getElementById('hamBtn');


hamburger.addEventListener("click", function toggleMenu(x) {
  x = window.matchMedia("(max-width: 100%)");
  x.addListener(toggleMenu);
  if (newMenu.classList.contains("none")) {
    newMenu.classList.remove("none");
    hamburger.classList.add("change");
    hamburgerMenu.classList.add("change");
    // show.classList.remove("show");
  } else if (hamburger.classList.contains("change")) {
    hamburger.classList.remove("change");
    hamburgerMenu.classList.remove("change");
    hamburgerMenu.classList.add("none");
    newMenu.classList.add("none");

  }

});


