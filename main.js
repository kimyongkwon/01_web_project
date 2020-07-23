"use_district";

// const navbar = document.querySelector(".navbar__menu__item");
// navbar.addEventListener("click", () => {

// });

const head = document.querySelector("#head");
document.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    head.classList.remove("appear");
    head.classList.add("disappear");
    console.log(window.scrollY);
  }

  if (window.scrollY < 400) {
    head.classList.remove("disappear");
    head.classList.add("appear");
    console.log(window.scrollY);
  }
});
