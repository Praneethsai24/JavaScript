// let age = Number(prompt("Enter Your Age : "))
// let haslicence = prompt("DO you have a licence??(Only True or False please)")

// console.log(age >= 18 && haslicence);
// console.log(age <= 18 || haslicence);
// console.log(!haslicence);


const readlineSync = require("readline-sync");

let age = Number(readlineSync.question("Enter your age : "));
let haslicence = readlineSync.question("DO you have a licence??(Only True or False please) : ");

console.log(age >= 18 && haslicence);
console.log(age < 18 || haslicence);
console.log(!haslicence);