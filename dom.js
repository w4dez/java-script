"use strict";

//! Navigator - за допомогою нього ми можемо получити інформацію про браузер і операцйну систему

// console.log(navigator.userAgent);

// alert(location.href);
// if(confirm("Перейти на сайт Wikipedia?")) {
//   location.href = "https://wikipedia.org" // перенаправляє на іншу URL адресу
// }

// DOM - Наввігація по документу

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);

const item = document.querySelector(".item");
//! elem.parentNode - вибере батька elem

const parentElementNode = item.parentNode;

console.log(parentElementNode);

//! elem.childNodes - псевдомасив зберігає всі дочірні елементи, включаючи текстові.

const childElementNode = item.childNodes;

console.log(childElementNode);

//! elem.children - псевдомасив зберігає тільки дочірні вузли-елементи, тобто відповідні тегам.

const childrenElem = parentElementNode.children;

console.log(childrenElem);

//! elem.firstChild - вибере перший дочірній елемент всередині elem, включаючи текстові вузли.

//! Отримання першого дочірнього елементу
const container = document.querySelector(".container");

const firstChildElement = container.firstElementChild;

console.log("Перший дочірній елемент:", firstChildElement);

//! Отримання останнього елемента включаючи текстові вузли

const lastChild = container.lastElementChild; // Використовуємо lastElementChild замість lastChild

console.log("Останній дочірній елемент (включаючи текстові вузли):", lastChild);

// Отримання останнього дочірнього елементу
const lastElementChild = container.lastElementChild;

console.log("Останній дочірній елемент:", lastElementChild);

// Отримання попередньго сусіда
const secondElement = firstChildElement.nextElementSibling;

console.log("Отримання попередньго сусіда:", secondElement);

// Отримання наступного сусіда
const thirdElement = secondElement.nextElementSibling;

console.log("Отримання наступного сусіда:", thirdElement);

// Використання querySelector для вибору першого p

const firstParagraph = document.querySelector("p");

console.log("Перший елемент <p>:", firstParagraph);

const allParagraphs = document.querySelectorAll("p");

const secondParagraph = document.querySelector(".second");

console.log("Другий елемент <p>:", secondParagraph);

// const btn = documnet.getElementById("btn");
// const button = documnet.querySelector(".btn");

//! value; ця властивість містити поточний текстовий вміст елементів input, select. textarea. Вона дозволяє отримувати  або змінювати значення елементів

// const btnChangeValue = documnet.querySelector(".btn-input");
// const inputValue = documen.querySelector(".input");

// btnChangeValue.addEventListener("click", () => {
//   inputValue.value = "New value";
// });

// const checkbox = documen.getElementById("checkbox");
// const btnStateCgange = document.querySelector(".btn-state");

// btnStateCgange.addEventListener("click", () => {
//   checkbox.checked = !checkbox.checked;
// });

//name
const showBtnName = document.querySelector(".btn-show");
const userName = document.querySelector("#usernameInput");

showBtnName.addEventListener("click", () => {
  alert("Username" + userName.name);
  alert("Username" + userName.value);
});

/// src

let image = document.getElementById("image");

image.addEventListener("click", () => {
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&usqp=CAU";
});

//elem.textContent — властивість, містить текстовий контент всередині елемента. Доступно для запису, при чому незалежно що буде передано в textContent, дані завжди будуть записані як текст.

const changeTextBtn = document.querySelector(".change-text");
const text = document.querySelector(".text");

changeTextBtn.addEventListener("click", () => {
  text.textContent = "New text";
});

text.style.backgroundColor = "yellow";
const example = document.getElementById("example");
const checkButton = document.getElementById("checkButton");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const replaceButton = document.getElementById("replaceButton");
const toggleButton = document.getElementById("toggleButton");
///elem.classList.contains(cls) - повертає true або false, в залежності від того, чи є в елемента клас cls

checkButton.addEventListener("click", () => {
  const hasClass = example.classList.contains("hightLight");
  console.log(hasClass);
});
addButton.addEventListener("click", () => {
  example.classList.add("hightLight");
});
removeButton.addEventListener("click", () => {
  example.classList.remove("hightLight");
});
replaceButton.addEventListener("click", () => {
  example.classList.replace("hightLight");
});
toggleButton.addEventListener("click", () => {
  example.classList.toggle("hightLight");
});
