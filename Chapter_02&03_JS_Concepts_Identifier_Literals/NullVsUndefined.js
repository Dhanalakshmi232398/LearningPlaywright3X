//==================================
//                 Null vs Undefined in Javascript

/* 
Simple Defenitions:

Undefined: A variable exists, but its has not been assigned a value yet. Javascript itself sets the automaticslly.
It is the default value of uninitialized variables.

Null: A variable exists, but the developer explicitly assigns "no value" or "empty value" to it.
It is an intentional absence of any object value.


*/

var x; // x is declared but not assigned a value, so it is undefined
console.log(x); // Output: undefined
console.log(typeof x); // Output: undefined


var y = null; // y is declared and explicitly assigned the value null
Console.log(y); // Output: null
console.log(typeof y); // Output: object (this is a known quirk in JavaScript, null is considered an object)
