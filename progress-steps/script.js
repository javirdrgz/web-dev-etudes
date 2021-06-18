"use strict";

// A Step is a Natural number [1,4]

// Initial step
let step = 1;
const inc = (step) => (step < 4 ? step + 1 : step);
const dec = (step) => (step > 1 ? step - 1 : step);

const steps = document.querySelectorAll("li");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progressBar = document.querySelector("ol");

const updateSteps = () => {
  steps.forEach((s, i) =>
    i < step ? s.classList.add("completed") : s.classList.remove("completed")
  );
  const progress = ((step - 1) / (steps.length - 1)) * 100;
  progressBar.style.setProperty("--progress", progress + "%");
};

next.addEventListener("click", () => {
  step = inc(step);
  step === steps.length && (next.disabled = true);
  prev.disabled = false;
  updateSteps();
});

prev.addEventListener("click", () => {
  step = dec(step);
  step === 1 && (prev.disabled = true);
  next.disabled = false;
  updateSteps();
});
