"use strict";

// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  hobby: "box",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const countProps = function (obj) {
  let count = 0;

  for (let key of Object.keys(obj)) {
    count += 1;
  }
  return count;
};

console.log(countProps({ name: "vasya", age: 21, job: "codder" }));

//Nапиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employees = {
  bread: 23,
  kolya: 21,
  egor: 15,
  gyat: 17,
};

const findBestEmployee = function (employees) {
  let mostUsefulEmployee = 0;
  let mostUsefulEmployeeName = "";
  const employeesTasks = Object.entries(employees);

  for (let i = 0; i < employeesTasks.length; i++) {
    if (mostUsefulEmployee < employeesTasks[i][1]) {
      mostUsefulEmployee = employeesTasks[i][1];
      mostUsefulEmployeeName = employeesTasks[i][0];
    }
  }

  return `${mostUsefulEmployeeName} : ${mostUsefulEmployee}`;
};

console.log(findBestEmployee(employees));

//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const employeesSalary = {
  bread: 13500,
  kolya: 10000,
  egor: 9800,
  gyat: 12000,
};

const countTotalSalary = function (employees) {
  let salarySum = 0;
  const salaryArray = Object.values(employees);
  for (let i = 0; i < salaryArray.length; i++) {
    salarySum += salaryArray[i];
  }
  return ` salary: ${salarySum}`;
};

console.log(countTotalSalary(employeesSalary));

//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const users = [
  { name: "yad", age: 18 },
  { name: "rei", age: 15 },
  { name: "aysha", age: 17 },
];

const getAllPropValues = function (arr, prop) {
  const allProp = [];

  for (const obj of arr) {
    if (prop in obj) {
      allProp.push(obj[prop]);
    }
  }
  return allProp;
};

console.log(getAllPropValues(users, "age"));

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
  { name: "pineapple", price: 4, number: 10 },
  { name: "cherry", price: 10, number: 40 },
  { name: "cramp", price: 4, number: 60 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let productSum = 0;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      productSum = product.price * product.number;
    }
  }
  return productSum;
};

console.log(calculateTotalPrice(products, "cramp"));

//! деструктуризація

//1
const { hobby, premium, mood } = user;
console.log(hobby, premium, mood);

//2

const { bread: user1, kolya: user2, egor: user3, gyat: user4 } = employees;
console.log(user1, user2, user3, user4);

//3
const {
  bread: breadSalary,
  kolya: kolyaSalary,
  egor: egorSalary,
  gyat: gyatSalary,
} = employeesSalary;
console.log(breadSalary, kolyaSalary, egorSalary, gyatSalary);

//4

const [
  { name: name1, age: age1 },
  { name: name2, age: age2 },
  { name: name3, age: age3 },
] = users;

console.log(name1, name2, name3, age1, age2, age3);

//5

const [
  { name: productName1, price: productPrice1, number: productNumber1 },
  { name: productName2, price: productPrice2, number: productNumber2 },
  { name: productName3, price: productPrice3, number: productNumber3 },
] = products;

console.log(
  productName1,
  productName2,
  productName3,
  productPrice1,
  productPrice2,
  productPrice3,
  productNumber1,
  productNumber2,
  productNumber3
);
