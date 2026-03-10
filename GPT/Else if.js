const readlineSync = require("readline-sync")

let temp = Number(readlineSync.question("Enter the temp : "))

if (temp < 0){
    console.log("Freezing!!")
} else if (temp <=15){
    console.log("Cold")
} else if (temp <= 30){
    console.log("Warm")
} else {
    console.log(" Hot")
}