// source/scripts/index.js
var openButton = document.querySelector(".header__button");
var nav = document.querySelector("nav");
openButton.addEventListener("click", (evt) => {
  if (nav.classList.contains("nav--cloused")) {
    nav.classList.remove("nav--cloused");
    openButton.classList.add("header__button--clouse");
  } else {
    nav.classList.add("nav--cloused");
    openButton.classList.remove("header__button--clouse");
  }
});
//# sourceMappingURL=index.js.map
