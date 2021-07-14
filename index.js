"use strict";

const sideNav = document.querySelector(".side-nav");
const sideAc = document.querySelectorAll(".side-nav__item");

sideNav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".side-nav__item");
  if (!clicked) return;
  console.log(e.target);
  console.log(clicked);

  sideAc.forEach((t) => t.classList.remove("side-nav__item--active"));
  clicked.classList.add("side-nav__item--active");
});
