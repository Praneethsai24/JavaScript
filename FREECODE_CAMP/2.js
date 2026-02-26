function worldBlanks(myNoun, myAdjecttive, myVerb, myAdverb){

    var result = ""
    result += "The " + myAdjecttive + " " + myNoun
    return result;
}

console.log(worldBlanks("dog", "big"))

// ACCESSING ARRAY DATA WITH INDEXES.
var myArray = [50, 60, 70]
var myOutput = myArray[0]
console.log(myOutput) // o/p will be 50

// Modifying Arrays
var mod_array = [1, 7, 33, 45]
mod_array[0] = 3
console.log(mod_array)

// Accessing multi dimensional arrays with indexing. 
var mdim_array = [[1,2,3], [4,5,6], [7,8,9]];
console.log(mdim_array[2][1])
console.log(mdim_array[0][2])

// Manipulating Arrays with push()
manip_array = ["Max", "Ronaldo", "Ric"]
manip_array.push(["ROhit", "SKY"])
console.log(manip_array) // o/p = [ 'Max', 'Ronaldo', 'Ric', [ 'ROhit', 'SKY' ] ]

// Manipulating Arrays with pop()
manip_pop_array = [1,2,3];
manip_pop_array.pop()
console.log(manip_pop_array) // o/p = [ 1, 2 ]

// Manipulating Arrays with shift() --> removes the first element!
shift_array = ["Lando", "Max", "Checo"]
shift_array.shift()
console.log(shift_array) // op = [ 'Max', 'Checo' ]

// Manipulating Arrays with unshift() --> Adds the ele at the begginning of array
unshift_array = ["checo"]
unshift_array.unshift("Max")
console.log(unshift_array) // op = [ 'Max', 'Checo' ]

// Writing reusable code with functions
function reusablefunction(){
    console.log("Reusable function is working")
}
reusablefunction();

function newreusablefunction(){
    console.log("Reusing function");
}
newreusablefunction();