"use strict";

const buttons = document.querySelectorAll("button");
const circle = document.querySelector(".circle");
const main = document.querySelector("main");
const nav = document.querySelector("nav");

buttons.forEach((btn) => {
  btn.addEventListener("click", (_) => {
    circle.classList.toggle("rotated");
    main.classList.toggle("rotated");
    nav.classList.toggle("visible");
  });
});
