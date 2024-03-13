// Змінна lang може приймати 4 значення: 'ua', 'en', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

let lang = prompt(
  "Введіть мову ge- Germany, en- English, fr- French, ua- Ukrainian",
  ""
);
let month;
switch (lang) {
  case "en":
    alert("Agust");

    break;
  case "fr":
    alert("augistino");

    break;
  case "ua":
    alert("Січень");

    break;
  case "ge":
    alert("der August");

    break;
  default:
    alert("Unknown language");
}
// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
function displayMessage() {
  let drinkElemnt = document.getElementById("drinkSelect");
  let massageElement = document.getElementById("massage");
  let drinkValue = drinkElemnt.value;
  switch (drinkValue) {
    case "coffee":
      massageElement.textContent = "you choosed the coffee";
      break;
    case "tea":
      massageElement.textContent = "you choosed the tee";
      break;
    case "juice":
      massageElement.textContent = "you choosed the juice";
      break;
    default:
      massageElement.textContent = "";
  }
}
// Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

function checkDay() {
  let dayInput = document.getElementById("dayInput").value.toLowerCase();
  let resultElement = document.getElementById("result");
  switch (dayInput) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
      resultElement.textContent = "Це робочий день";
      break;
    case "субота":
    case "неділя":
      resultElement.textContent = "Це вихідний";
      break;
    default:
      resultElement.textContent = "Такого дня немає :(";
  }
}
