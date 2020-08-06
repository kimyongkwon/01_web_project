"use_district";

const selected = document.querySelector(".selected");
const head = document.querySelector("#head");
const header = document.querySelector(".header__content");

const subMenuButton = document.querySelector(".subMenu");
const subMenuExitButton = document.querySelector(".subMenu__box__exit__button");

function scrollYFunc() {
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
}

function subMenuClick() {
  const box = document.querySelector(".subMenu__box");
  box.classList.add("subMenu__appear");
  if (box.classList.contains("subMenu__disappear")) {
    box.classList.remove("subMenu__disappear");
  }
}

function subMenuExitClick() {
  const box = document.querySelector(".subMenu__box");
  box.classList.add("subMenu__disappear");
  if (box.classList.contains("subMenu__appear")) {
    box.classList.remove("subMenu__appear");
  }
}

if (selected.dataset.link == "MASSIVELY") {
  document.addEventListener("scroll", scrollYFunc);
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

subMenuButton.addEventListener("click", subMenuClick);
subMenuExitButton.addEventListener("click", subMenuExitClick);
