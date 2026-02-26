/* data types:
undefined, null, boolean, string, symbol, number, and object
*/

//KEYWORDS
var name = 'Max' // var - variable. can use throught out the programm. 
 
name = 3
console.log(name)

let name2 = 'Verstappen'  //let can be accessed and can be used within the block where it is declared.

const pi = 3.14 //const can never be changed


/* let (uses block space) declares a variable that exists only inside the block where it is defined. 
Block can mean anything that is wrapped inside {} like an if, for, or a function body.
Basically let only lives and can be used inside that box. Outside it's existense is not found */

//ASSIGNING & DECLARING THE VARIABLES
var a; //here we are declaring the variable
var b = 2; // here we are declaring and assigning(=) the variable. 
b = a;
console.log(a)

//Initializing variables with Assignment operator
var a = 9; // var a is declaring and = 9; is assigning the variable.

// UNINITIALIZED VARIABLE
var a; //here a is uninitiazed we can initialize it by assigning a variable!

// Incrementing or decrementing the number: we can use var_name ++ or var_name --
var myVar = 11;
myVar++;
console.log(myVar)
myVar--;
console.log(myVar)

//DOUBLE QUOTE ESCAPE CHARCTER! to skip a double quote character
var myStr = "I am a \"double quoted\" string inside another \"double quoted\" string"
console.log(myStr)
// we use (\) called an escape character which escapes the next character helps in skipping the quote
// or use single quote at the start and double quote when needed (or) use ~(backtick) fromo start so we can use single and double quote as well

/* (\)operations:
\' --> single quote
\ " --> double quote
\\ --> backslash
\n --> newline
\r --> carriage return
\t --> tab
\b --> backspace
\f --> form feed
*/
var myStr = "FirstLine\n\t\\secondline\nThirdLine" // \\--> prints the backslash
console.log(myStr)

// Finding length of string!
var length = 'Maxie'
length_length = length.length
console.log(length_length)

//INDEXING:
index_name = 'Max Verstappen'
console.log(index_name[0]) // o/p = M

third_digit_from_last = index_name[index_name.length -3]
console.log(third_digit_from_last) // o/p = p

//String IMMUTABILITY

var str_imm = 'Kax Verstappen'
str_imm[0] = "M" //won't work. Because of immutability of string
str_imm = "Max verstappen" 
console.log(str_imm)