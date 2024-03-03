"use strict";
// 20.02.24 homework

const openButton = document.querySelector('[data-action="open-modal"]');

const closeButton = document.querySelector('[data-action="close-modal"]');

function toggleModal() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("show-modal");
}

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

// 22.04.24 hw
const redInput = document.querySelector(".redInput");
const whiteInput = document.querySelector(".whiteInput");
const greenInput = document.querySelector(".greenInput");
const body = document.body;

redInput.addEventListener("change", () => {
  body.style.backgroundColor = "red";
});

greenInput.addEventListener("change", () => {
  body.style.backgroundColor = "green";
});

whiteInput.addEventListener("change", () => {
  body.style.backgroundColor = "white";
});

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
function myFunction() {
  const username = nameInput.value;

  if (username === "") {
    nameOutput.textContent = "незнайомець";
  } else {
    nameOutput.textContent = username;
  }
}
nameInput.addEventListener("input", myFunction);
