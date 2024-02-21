"use strict";
// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const btnChange = document.getElementById("changeBtn");
const input = document.getElementById("textInput");

btnChange.addEventListener("click", () => {
  btnChange.innerText = input.value;
});
// Створити розмітку  з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
let changeImg = document.getElementById("changeImg");
changeImg.addEventListener("click", () => {
  changeImg.src =
    "https://i.pinimg.com/originals/7b/a5/c7/7ba5c7ee512f3016baa0050a13ef22aa.jpg";
  changeImg.alt = "Black Lives Matter";
});
// Створити розмітку  з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
let changeLink = document.getElementById("changeLink");
changeLink.addEventListener("click", () => {
  changeLink.href =
    "https://humanrights.gov.au/our-work/race-discrimination/what-racism ";
});
// Створити розмітку  зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
const container = document.querySelector(".links");

const firstChildElement = container.firstElementChild;

firstChildElement.addEventListener("click", () => {
  firstChildElement.textContent = "Stop being racist";
});

// Я НЕ РАСИСТ!!!!!
