"use strict";

const massage = "Mango " + "Happy";
console.log(massage);

let result;

result = 5 + "5";

console.log(result);

const str = "Успіх - це не випадковість, а результат постійного старання ";
console.log(str.startsWith("Усп"));
console.log(str.endsWith("Усп"));

const title = "Welcome";

// console.log(title.trim());

console.log(title.padEnd(13, "!"));

const Name = "Gosha";
console.log(Name.charAt(0));

const secondName = "Smorodskyi Heorhii";

console.log(secondName.indexOf(" "));

const nommer = promt("В який румі ви хочете бути", "");

const price = prompt("Ореінтована ціна", "");
const floor = prompt("На якому єтажі ви хочете бути", "");
const finall = prompt(`Ви будете на &{floor}. в номері &{nommer}, за &{price}
`);
console.log(finnal);
