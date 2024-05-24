"use strict";

// const natrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(natrix[0][1], natrix[2][1]);

// let total = 0;
// for (let i = 0; i < natrix.length; i++) {
//   console.log("Підмасив матриці natrix[i]", natrix[i]);
//   for (let j = 0; j < natrix[i].length; j++) {
//     console.log("Елмент підмасиву natrix[i][j]", natrix[i][j]);
//   }
// }
// console.log(total);
// let arr = [1, 5, "4", "hello"];

// arr.push(22);

// for (let i = 0; i < arr.length; i++) {
//   console.log("Масив  arr[i]", arr[i]);
// }
// let arr = [1, 5, "4", "hello"];

// for (const element of arr) {
//   console.log(element);
// }
// // Написати скрипт який порахує сумму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);
// // Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// // - Спочатку через for
// // - Потім через for...of
// // - Логіка break
// // - Метод includes() с тернарним оператором
// const logins = ["user1", "user2", "user3", "user4"];
// const loginToFind = "user4";
// let message = "";
// for (let i = 0; i < logins.length; i++)
//   if (logins[i] === loginToFind) {
//     message = `user ${loginToFind} find.`;

//     break;
//   } else {
//     message = `user ${loginToFind} not find.`;
//   }

// console.log(message);

// // Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
// const numbers = ["1", "2", "3"];
// numbers[1] = 10;
// console.log(numbers);
// //   Створити масив із трьох рядків. Додати до масиву ще одну рядків.
// const lines = ["dime", "clime", "slime"];
// lines.push("crime");
// console.log(lines);
// //   Створити скрипт який поверне суму всіх чисел в масиві.
// const numbers = [1, 3, 56, 23, 12];
// let total = 0;
// for (let y = 0; y < numbers.length; y++) {
//   total += numbers[y];
// }
// console.log(total);
// //   Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
// const lime = [1, 2, 3, 5, 12];
// for (const numbers of lime) {
//   console.log(numbers);
// }
// //   Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
// const bang = ["dime", "clime", "slime", "consistent ", "coherent"];
// for (let i = 0; i < bang.length; i++) {
//   if (bang[i].length > 5) {
//     console.log(bang[i]);
//   }
// }
// //   Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
// const limeNum = [1, 2, 3, 5, 12, 65, 123, 68, 35, 17];
// let max = Math.max(...limeNum);
// console.log(max);
// //   Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
// const quatro = [5, 23, 24, 98.6056, 21378, 2678, 654, 4];
// for (let i = 0; i < quatro.length; i++) {
//   if (quatro[i] % 2 === 0) {
//     console.log(quatro[i]);
//   }
// }

// //! Методи join() & split()
// // split(s) — дозволяє перетворити рядок в масив, розбивши її по розподілу s. Це не метод масиву, але розглядаємо ми його зараз так, як раніше про масиви не знали.
// // join(s) — робить в точності протилежне split. Він бере масив і склеює його в рядок, використовуючи s як роздільник.

// const message = "Welcome back";

// console.log(message.split(" "));

// const fruits = ["apple", "orange", "peach", "orange"];

// console.log(fruits.join(", "));
// console.log(fruits.join("-"));

// //! indexOf() & includes()

// const slime = ["shawty", "wanna", "pull up", "to ", "the house"];

// console.log(slime.includes("wanna"));
// console.log(slime.indexOf("shawty"));

// //Перевірка множини умов через include()

// const fruit = "apple";

// const answer = prompt("Are you sure you want to", "");

// answer.toUpperCase();
// fruit.toUpperCase();

// if (answer.includes(fruit) && answer !== null) {
//   alert("true");
// } else {
//   alert("false");
// }

// //! push, pop

// const array = ["res", "3", "molly"];

// console.log(array.pop());
// console.log(array);

// //! shift(), unshift()
// // shift() — видаляє елемент з початку масиву і повертає його (елемента) значення.
// // unshift() — додає елемент в початок масиву.

// const users = ["fish", "broke", "gf"];

// console.log(users.shift());
// console.log(users);

// console.log(users.unshift("Humble"));
// console.log(users);

// //! slice()

// const workers = ["John", "alice", "stoner", "clown"];

// // console.log(users.slice(1));
// console.log(workers.slice(1, 3));

// console.log(workers.slice(-3));

// //! splice()

// // Щоб видалити елементи з масиву
// // splice(position, num)

// // position - вказувати позицію (індекс) першиго елемента для видалення
// // num - кількість видаляючихся елементів

// const scores = [1, 2, 3, 4, 5, 6];

// const deletedScores = scores.splice(3, 3);

// console.log(scores);

// console.log(deletedScores);

// const colors = ["red", "green", "blue"];

// console.log(colors.splice(0, 0, "purple"));

// console.log(colors);

// const colors = ["red", "green", "blue"];

// // console.log(colors.splice(0, 0, "purple"));
// console.log(colors.splice(1, 1, "purple"));
// console.log(colors);

// дз по методам масивам

// 1

const friends = ["mango", "poly", "kiwi", "ajax"];

let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i] + " ";
}
console.log(string);

let string1 = friends.join(" ");

console.log(string1);

//  2

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

const delCard = cards.splice(2, 1);
cards.push("card-6");

cards[3] = "карточка-4";

console.log(cards);
console.log(delCard);
