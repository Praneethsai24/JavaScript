function Function_with_args(a,b){
    console.log(a-b)
}

Function_with_args(10,5);

// Global Scope and Functions
// scope refers to visibilty of variables.
// Variables that are defined out of a function block have global scope
// variables that have global scope can be seen everywhere in js code

var Global = 10;
function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    var output = ""
    if (typeof Global != "undefined"){
        output += "Global: " + Global
    }
    if (typeof oopsGlobal != "undefined"){
        output += "  oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1()
fun2();

//Local Space and functions
function myLocalSpace(){
    var variabel = 5;
    console.log(variabel);
}

myLocalSpace(); // throws error here since we are accessing the local variable outside the function!

// Global Var VS Local Var
//ex:
var outerVar = "T-shirt"

function outfit(){
    
    return outerVar
}
console.log(outfit()); // returns T-shirt 

//But if we have the local variable with same name then local will be prioritised

//ex:
var globalVar = "Sweater";

function gloVsLocal(){
    var globalVar = " Hoodie"

    return globalVar;
}

console.log(gloVsLocal()); // Here hoodie will be the o/p 
console.log(globalVar); // o/p will be sweater