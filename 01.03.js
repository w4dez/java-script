"use strict";
// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
const inputOne = getElementById("validation-input1");
const inputTwo = getElementById("validation-input2");
const checkBtn = document.querySelector(".check");
function checkBtn*(){if (inputOne.value && inputTwo.value)  alert('please write something')}
checkBtn.addEventListener("click");
