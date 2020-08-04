"use_district";

// const navbar = document.querySelector(".navbar__menu__item");
// navbar.addEventListener("click", () => {

// });

const headerScrollY = 350;

const head = document.querySelector("#head");
const header = document.querySelector(".header__content");
document.addEventListener("scroll", () => {
  if (window.scrollY > headerScrollY) {
    head.classList.remove("appear");
    head.classList.add("disappear");

    // header.classList.remove("head__disappear");
    header.classList.add("header__appear");
    header.classList.remove("header__disappear");
    // console.log(window.scrollY);
  }

  if (window.scrollY < headerScrollY) {
    head.classList.remove("disappear");
    head.classList.add("appear");

    header.classList.remove("header__appear");
    header.classList.add("header__disappear");
  }
});
