"use strict";

const natrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(natrix[0][1], natrix[2][1]);

let total = 0;
for (let i = 0; i < natrix.length; i++) {
  console.log("Підмасив матриці natrix[i]", natrix[i]);
  for (let j = 0; j < natrix[i].length; j++) {
    console.log("Елмент підмасиву natrix[i][j]", natrix[i][j]);
  }
}
console.log(total);
let arr = [1, 5, "4", "hello"];

arr.push(22);

for (let i = 0; i < arr.length; i++) {
  console.log("Масив  arr[i]", arr[i]);
}
let arr = [1, 5, "4", "hello"];

for (const element of arr) {
  console.log(element);
}
// Написати скрипт який порахує сумму всіх парних чисел в масиві
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    total += numbers[i];
  }
}
console.log(total);
// Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// - Спочатку через for
// - Потім через for...of
// - Логіка break
// - Метод includes() с тернарним оператором
const logins = ["user1", "user2", "user3", "user4"];
const loginToFind = "user4";
let message = "";
for (let i = 0; i < logins.length; i++)
  if (logins[i] === loginToFind) {
    message = `user ${loginToFind} find.`;

    break;
  } else {
    message = `user ${loginToFind} not find.`;
  }

console.log(message);

// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const numbers = ["1", "2", "3"];
numbers[1] = 10;
console.log(numbers);
//   Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const lines = ["dime", "clime", "slime"];
lines.push("crime");
console.log(lines);
//   Створити скрипт який поверне суму всіх чисел в масиві.
const numbers = [1, 3, 56, 23, 12];
let total = 0;
for (let y = 0; y < numbers.length; y++) {
  total += numbers[y];
}
console.log(total);
//   Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const lime = [1, 2, 3, 5, 12];
for (const numbers of lime) {
  console.log(numbers);
}
//   Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const bang = ["dime", "clime", "slime", "consistent ", "coherent"];
for (let i = 0; i < bang.length; i++) {
  if (bang[i].length > 5) {
    console.log(bang[i]);
  }
}
//   Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const limeNum = [1, 2, 3, 5, 12, 65, 123, 68, 35, 17];
let max = Math.max(...limeNum);
console.log(max);
//   Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const quatro = [5, 23, 24, 98.6056, 21378, 2678, 654, 4];
for (let i = 0; i < quatro.length; i++) {
  if (quatro[i] % 2 === 0) {
    console.log(quatro[i]);
  }
}
