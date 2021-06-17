"use strict";

// A Step is a Natural number [1,4]

// Initial step
let step = 1;
const inc = (step) => (step < 4 ? step + 1 : step);
const dec = (step) => (step > 1 ? step - 1 : step);

const steps = document.querySelectorAll("li");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const updateSteps = () => {
  steps.forEach((s, i) =>
    i < step ? s.classList.add("completed") : s.classList.remove("completed")
  );
};

next.addEventListener("click", () => {
  step = inc(step);
  updateSteps();
});

prev.addEventListener("click", () => {
  step = dec(step);
  updateSteps();
});
