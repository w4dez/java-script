"use strict";

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}  - ${array[i]}`);
  }
};

logItems([5, 3, 2, 5, 2, 1, 4, 1, 1]);

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
  let words = message.split(" ");
  let total = 0;
  for (let i = 0; i < words.length; i++) {
    total = (i + 1) * pricePerWord;
  }
  return console.log(total);
};

calculateEngravingPrice("klrkarsadrasdsa, lol,lmao", 23);

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  let words = string.split(" ");
  longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return console.log(longestWord);
};

findLongestWord("whats popin guys, imma freak ash");

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function (string) {
  if (string.length >= 40) {
    string = string.slice(0, 40) + "...";
  }
  return string;
};
console.log(
  formatString("lololololololololololololololololololololololololololol")
);

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
  const checker = message.includes("spam" && "sale");
  return checker;
};
console.log(checkForSpam("i been never in scam, trust me"));

// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("write a number");
  console.log(input);

  if (input === null) {
    break;
  }

  const number = parseFloat(input);
  console.log(typeof number);
  if (isNaN(number)) {
    alert("noooooo");
    continue;
  }
  numbers.push(number);
}

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(`загальна сума: ${total}`);
