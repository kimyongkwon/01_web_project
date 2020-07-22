"use_district";

// const navbar = document.querySelector(".navbar__menu__item");
// navbar.addEventListener("click", () => {

// });

const head = document.querySelector("#head");
document.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    head.classList.add("disappear");
  }
});
