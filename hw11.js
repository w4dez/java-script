// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
  ownerName: "Petr",
  accountNumber: 777,
  balance: 20000,
  deposit(amount) {
    if (isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }
    this.balance += amount;
    alert(`Your balance is now: ${this.balance}`);
  },
  withdraw(amount) {
    if (isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }
    if (this.balance < amount) {
      alert("Insufficient funds");
      return;
    }
    this.balance -= amount;
    alert(`Your balance is now: ${this.balance}`);
  },
};

const depositButton = document.getElementById("deposite");
depositButton.addEventListener("click", () => {
  const amount = prompt("How much money do you want to deposit?");
  bankAccount.deposit(parseFloat(amount));
});

const withdrawButton = document.getElementById("withdraw");
withdrawButton.addEventListener("click", () => {
  const amount = prompt("How much money do you want to withdraw?");
  bankAccount.withdraw(parseFloat(amount));
});

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
  temperature: parseFloat(prompt("Введіть температуру")),
  humidity: 10,
  windSpeed: "5 km/m",
};
weather.checkTemperature = function () {
  if (this.temperature < 0) {
    alert("Температура нижче 0 градусів за Цельсія");
    return true;
  } else {
    alert("Температура вище або рівна 0 градусів за Цельсія");
    return false;
  }
};
weather.checkTemperature();

// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
  name: "gosha",
  password: "",
  email: "",
  login: function (checkEmail, checkPassword) {
    checkEmail = prompt("Введіть email");
    if (this.email === checkEmail) {
      alert("Ви ввели правильний email");
    } else {
      alert("Ви ввели неправильний email");
    }
    checkPassword = prompt("Введіть password");
    if (this.password === checkPassword) {
      alert("Ви ввели правильний password");
    } else {
      alert("Ви ввели неправильний password");
    }
  },
};

const emailInputElement = document.getElementById("emailInput");
const passwordInputElement = document.getElementById("passwordInput");
emailInputElement.addEventListener("input", function () {
  user.email = this.value;
});

passwordInputElement.addEventListener("input", function () {
  user.password = this.value;
});
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function () {
  user.login(user.email, user.password);
});
// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
const movie = {
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  year: 1994,
  rating: 9.3,
  isHighRating: function () {
    return this.rating > 8;
  },
};

const movieContainer = document.getElementById("movie-info");
movieContainer.innerHTML = `
    <h2>${movie.title}</h2>
    <p>Director: ${movie.director}</p>
    <p>Year: ${movie.year}</p>
    <p>Rating: ${movie.rating}</p>
  `;

if (movie.isHighRating()) {
  movieContainer.querySelector("h2").style.color = "green";
}
