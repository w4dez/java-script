"use strict";

// while (умова) {}

let j = 0;
while (j < 3) {
  console.log(i);
  j++;
}

let age = 0;

while (age <= 18) {
  console.log(age);
  age += 2;
}

let counter = 0;

while (counter <= 10) {
  console.log(`counter: ${counter}`);
  counter++;
}

let clientCounter = 18;
const maxClients = 25;

do {
  console.log(clientCounter);
  clientCounter++;
} while (clientCounter <= maxClients);
// do... while

do {
  // тіло циклу
} while (умова);

let x = 0;
do {
  console.log(x);
  x++;
} while (false);

// Цю форму синтаксису слід використовувати лише тоді, коли ви хочете, щоб тіло циклу виконалось хоча б один раз, незалежно від умови. Зазвичай, інша форма є більш бажаною while(…) {…}

let passsword = "";
do {
  password = prompt("enter passsword", "");
} while (passsword.length <= 4);
console.log(password);

//for
// for (let i; умова; i++) {
//   //тіло циклу
//   console.log(i);
// }

let k = 0;

for (k; k < 5; k++) {
  console.log(k);
}

console.log(k);

const max = 10;

for (let i = 0; i < max; i++) {
  console.log(i);
}

// порахуєм суму чисел до певного значення

const target = 12;
let sum = 0;

for (let i = 0; i < target; i += 2) {
  sum++;
  console.log(sum);
}
console.log(sum);

const maxN = 10;
for (let i = 0; i < maxN; i++) {
  console.log(`${maxN} % ${i} =`, maxN % i);
}

//! HOMEWORK
// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
let numbers = 0;

while (numbers <= 10) {
  console.log(`counter: ${numbers}`);
  numbers++;
}
//   Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.
let maxNumber = 20;
for (let i = 2; i <= maxNumber; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

//   Вивести на екран таблицю множення числа 7 за допомогою циклу for.
for (let i = 1; i <= 10; i++) {
  console.log("7 * " + i + " = " + 7 * i);
}
//   Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}
//   Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
const maxNum = 10;
for (let i = 1; i <= maxNum; i++) {
  if (i === 7) continue;

  for (let i = 1; i <= maxNum; i++) {
    console.log(i);
    if (i === 7) break;
  }
}

//   Створити скрипт, який виводить на екран всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
const n = 8;
for (let i = 0; i <= n; ++i) {
  if (i < n) console.log(i);
  if (n <= i) break;
}
//   За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let number = 1;

while (number <= 20) {
  if (number % 3 === 0) {
    number++;
    continue;
  }
  console.log(number);
  number++;
}
