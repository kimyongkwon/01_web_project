"use_district";

const selected = document.querySelector(".selected");
const head = document.querySelector("#head");
const header = document.querySelector(".header__content");

if (selected.dataset.link == "MASSIVELY") {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      head.classList.remove("appear");
      head.classList.add("disappear");

      // header.classList.remove("head__disappear");
      header.classList.add("header__appear");
      header.classList.remove("header__disappear");
      // console.log(window.scrollY);
    }

    if (window.scrollY < 350) {
      head.classList.remove("disappear");
      head.classList.add("appear");

      header.classList.remove("header__appear");
      header.classList.add("header__disappear");
    }
  });
} else {
  const headTitle = document.querySelector(".head__title");
  const headDesc = document.querySelector(".head__description");
  const headArrow = document.querySelector(".head__arrow");
  // head.classList.add("invisible");
  headTitle.classList.add("invisible");
  headDesc.classList.add("invisible");
  headArrow.classList.add("invisible");
  header.classList.add("header__more__appear");
}
