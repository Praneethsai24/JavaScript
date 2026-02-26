/* Variable = A container that stores a value.

2 Steps to Create a Variable
- Declaration:  let x;
- Assignment x = 100;
*/

// let x;
// let y = 100;

// console.log(y)

let age = 22
let gpa = 7.6
let name = `MaxVerstappen`
let email = `Max33@gmail.com`
console.log(`You are ${age} years old. And You have ${gpa} GPA(grade point average)`)
console.log(typeof gpa); //number
console.log(typeof name); //string
console.log(typeof email); //string--can contain numbers inside string





// Arthimetic Operators = operands (values, variables, etc)
//                        operators (+, -, *, /)
//                  ex: 11 = x + 5;

let x = 30;
// x += 1; o/p = 31
// x -= 1; = 30
// x *= 2; = 60
// x /= 2 = 15
// x **= 3
x++;
x--;
console.log(x)






/*
Operator precedance
1. Paranthesis ()
2. exponents (**)
3. multiplication & divison & modulo
4. addition & subtraction
*/
// ex:
// let result = 1 + 2 * 3 + 4 ** 2;
/*
first **2 = 1 + 2 * 3 + 16;
then multiplication = 1 + 6 + 16
finally addition = 23
*/

let result = 6/2 ** (2+5); //o/p is 0.046875
console.log(result)






// Accept user input 
/* 2 ways
1. window prompt
2. HTML textbox (proffesional way)
*/

// window Prompt
// let username;
// username = window.prompt(`what's your username?`);
// console.log(username);

//HTML textbox way

// let username;
// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("text").value
//     console.log(username)
//     document.getElementById("h1").textContent = `Hello ${username}`
// }







//Type Conversion = change of datatype of a value to another (string, numbers, booleans)
// let tc_age = window.prompt("How old are you? ");
// tc_age = Number(tc_age) // we are converting the i/p string into number here
// tc_age+=1 // if we give 22 without the above step we get 221 cause it accepts string as input in window prompt 

// console.log(tc_age, typeof tc_age);

let a = `Max`
let b = ``
let c = `Max`
a = Number(a)
b = String(b)
c = Boolean(c)
console.log(a, typeof a) //o/p will be NaN 'number' 
console.log(b, typeof b) // o.p will be undefined.
console.log(c, typeof c) // true 'boolean'







// CONST = a variable that CAN'T be changed (short form for constant)

const pi = 3.14
let radius;
let circumference;

radius = window.prompt(`Enter the radius of the circle`)
area = pi * (radius ** 2)

document.getElementById("button").onclick = function(){
    radius = document.getElementById("text").value
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("h3").textContent = circumference;
}