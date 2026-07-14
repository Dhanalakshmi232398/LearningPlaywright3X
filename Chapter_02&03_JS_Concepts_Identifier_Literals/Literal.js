let name = "Rithan";  // string literal
let age = 25;  // number literal or numeric literal
let pi = 3.14;  // number literal or numeric literal
let isStudent = true;  // boolean literal
let nullValue = null;  // null literal  (typeof null will return "object" because null is considered an object in JavaScript, this is a known quirk in the language)
let undefinedValue;  // undefined literal

/* Numeric literals - numeric
int
float */

//typeof operator is used to check the type of a variable or value in JavaScript. It returns a string indicating the type of the operand. The possible return values are: "undefined", "object", "boolean", "number", "bigint", "string", "symbol", and "function".
console.log(typeof name);  // Output: string
console.log(typeof age);  // Output: number
console.log(typeof pi);  // Output: number
console.log(typeof isStudent);  // Output: boolean
console.log(typeof nullValue);  // Output: object (this is a known quirk in JavaScript, null is considered an object)
console.log(typeof undefinedValue);  // Output: undefined


//ex:
let count = 10;  // integer literal
let negativeCount = -5;  // negative integer literal
let zeroCount = 0;  // zero literal as Interger literal

let h = 0*FF; // hexadecimal literal
console.log(h);  // Output: 0
console.log(typeof h);  // Output: number

let color_hex = 0xFF0000; // hexadecimal literal for red color
console.log(color_hex);   // Output: 16711680
console.log(typeof color_hex);  // Output: number

let octal= 0o77; // octal literal for decimal 8 //base 8
console.log(octal);  // Output: 63
console.log(typeof octal);  // Output: number