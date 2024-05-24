"use strict";
// 1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
const clickButton = document.getElementById("click_button");

clickButton.addEventListener("click", () => {
  alert("Hello World!");
});
// 2. Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.
const randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessField").value);

  if (isNaN(userGuess)) {
    document.getElementById("result").textContent = "Введіть число";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    document.getElementById("result").textContent =
      "Число повинно бути в діапазоні від 1 до 100";
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById("result").textContent = " Ви вгадали число";
  } else if (userGuess > randomNumber) {
    document.getElementById("result").textContent = " Спробуйте менше";
  } else {
    document.getElementById("result").textContent = " Спробуйте більше";
  }
}
// 3. Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
let count = 0;
document.addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
// 4. Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
const applyCallbackToEachElement = (arr, callback) => {
  const result = [];
  for (const element of arr) {
    result.push(callback(element));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);

console.log(result);
// 5. Розрахунок дисконтної ціни

// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price * (1 - discount / 100);
  callback(discountedPrice);

  return discountedPrice;
};

const discount = 10;

const showDiscountedPrice = (discountedPrice) => {
  console.log(discountedPrice);
};

const productPrice = 100;

calculateDiscountedPrice(productPrice, discount, showDiscountedPrice);
