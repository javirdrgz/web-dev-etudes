"use strict";

const figures = document.querySelectorAll("figure");

figures.forEach((figure) =>
  figure.addEventListener("click", () => {
    figures.forEach((figure) => figure.classList.remove("active"));
    figure.classList.add("active");
  })
);
