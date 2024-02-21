const x = 5;
const y = 8;
const z = 5;
console.log(19 % x);

let num = "524";

console.log(typeof num);

num = Number(num);
console.log(typeof num);
console.log(num);

let elementWIdth = "50px";

elementWIdth = Number.parseInt(elementWIdth);

console.log(typeof elementWIdth);
console.log(elementWIdth);

let elementHeihgt = "20302030230asdasd223";
elementHeihgt = parseFloat(elementHeihgt);
console.log(typeof elementHeihgt);

const vadilNumber = Number("52");
console.log(Number.isNaN(vadilNumber));

console.log((0.1 * 10 + 0.2 * 10) / 10);

// Math.floor - повертає найбільше ціле число, або дорівнює вказаному
console.log(Math.floor(1.7));
// Math,cail(num) - повертає найменше число, більше або дорівнює вказаному

console.log(Math.ceil(9.2));

console.log(Math.round(11.1));

console.log(Math.max(10, 29.24924));

// Math.pow(num, exponent)- зведення числа в спупінт
console.log(Math.pow(2, 2));

// Math.random() - повертати випадкове число в діапозоні від 0 до 1
console.log(Math.random());

console.log((Math.random() * (10 - 1) + 1).toFixed());

// Створіть змінні a1, a2, a3, a4, a5 . За допомогою математичних операторів (додавання, віднімання і т.д.) знайдіть значення виразів: 5 + 3;  5 - 3;  5 * 3;  5/3, помістивши результат кожного виразу в змінну. Наприклад, let a1 = 5 + 3. Вивести в консоль всі змінні по черзі.
// Створіть змінні a6, a7, a8, a9, a10. Помістіть в них результат виразів: 5 % 3; 3 % 5; 5 + '3'; '5' - 3;  75 + 'кг' і виведіть на екран за допомогою alert по черзі всі змінні.
// '
// Напишіть скрипт для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).
// Створіть функцію яка генерує випадкове ціле число від min до max включно.
// Напишіть скрипт, який просить відвідувача ввести два числа, і в результаті показує їх суму.

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
console.log(a1, a2, a3, a4.toFixed());
