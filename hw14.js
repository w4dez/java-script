const users = [
  {
    name: "nazar",
    eyeColor: "grey",
    gender: "male",
    isActive: true,
    email: "nazar@gmail.com",
    age: 16,
  },
  {
    name: "nastya",
    eyeColor: "blue",
    gender: "female",
    isActive: false,
    email: "nastya@gmail.com",
    age: 15,
  },
  {
    name: "masha",
    eyeColor: "green",
    gender: "female",
    isActive: false,
    email: "masha@gmail.com",
    age: 18,
  },
  {
    name: "Mohamed",
    eyeColor: "browm",
    gender: "male",
    isActive: true,
    email: "Mohamed@gmail.com",
    age: 22,
  },
  {
    name: "dasha",
    eyeColor: "green",
    gender: "female",
    isActive: true,
    email: "dasha2004@gmail.com",
    age: 20,
  },
];

// Отримати масив імен всіх користувачів (поле name).
const allName = users.map((user) => user.name);
console.log(allName);

//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const eyeColor = users.filter((user) => {
  return user.eyeColor === "blue";
});
console.log(eyeColor);

//Отримати масив імен користувачів за статтю (поле gender).
const byGender = users.filter((user) => {
  if (user.gender === "female") {
    return user.name;
  }
});
const nameByGender = byGender.map((user) => user.name);

console.log(nameByGender);

//Отримати масив тільки неактивних користувачів (поле isActive).
const fillterActive = users.filter((user) => {
  if (user.isActive === false) {
    return user;
  }
});

console.log(fillterActive);

//Отримати користувача (не масив) по email (поле email, він унікальний).
const findByEmail = users.find((user) => user.email === "dasha2004@gmail.com");
console.log(findByEmail);

//тримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const passedAge = users.filter((user) => user.age > 15 && user.age < 23);

console.log(passedAge);
