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
