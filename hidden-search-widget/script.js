"use strict";

const searchBtn = document.querySelector("button");
const searchBar = document.querySelector("input");

searchBtn.addEventListener("click", (_) => {
  searchBar.classList.toggle("hidden");
});
