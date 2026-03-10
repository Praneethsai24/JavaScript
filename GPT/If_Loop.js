const readlineSync = require("readline-sync");

let temp = Number(readlineSync.question("Enter the temparature : "))
if (temp > 30){
    console.log("It's freaking Hot Outside!! ")
}

if (temp < 0){
    console.log("It's freezing in here")
}