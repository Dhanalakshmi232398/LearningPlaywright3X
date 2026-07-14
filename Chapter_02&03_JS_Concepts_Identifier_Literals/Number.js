// All number types in JavaScript

/*
In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
There is no seperate int, float,  double etc..
JS uses double-precision 64-bit binary format IEEE 754 values (numbers between -(2^53 -1) and 2^53 -1).
*/

//1. Integer literals
//-----------------------------

// Decimal (Base 10) - most common
let decimal = 42; // decimal literal
console.log(decimal);  // Output: 42
console.log(typeof decimal);  // Output: number

//Binary (Base 2) - start with 0b or 0B
let binary = 0b1010; // binary literal   // 10 in decimal 
console.log("Binary 0b1010:" + binary);  // Output: 10
console.log(typeof binary);  // Output: number

//octal (Base 8) - start with 0o or 0O
let octal = 0o52; // octal literal   // 42 in decimal
console.log("Octal 0o52:" +octal);  // Output: 42
console.log(typeof octal);  // Output: number

//Hexadecimal (Base 16) - start with 0x or 0X   
let hexadecimal = 0x2A; // hexadecimal literal   // 42 in decimal
console.log("Hexadecimal 0x2A:" +hexadecimal);  // Output: 42
console.log(typeof hexadecimal);  // Output: number



//2. Floating-point literals
let floatNum = 3.14; // floating-point literal
console.log(floatNum);  // Output: 3.14
console.log(typeof floatNum);  // Output: number    

let negativeFloatNum = -2.71; // negative floating-point literal
console.log(negativeFloatNum);  // Output: -2.71
console.log(typeof negativeFloatNum);  // Output: number    

let scientificNotation = 1.23e4; // scientific notation literal (1.23 * 10^4)
console.log(scientificNotation);  // Output: 12300
console.log(typeof scientificNotation);  // Output: number  

let float = .5; // floating-point literal without leading zero
console.log(float);  // Output: 0.5  
console.log(typeof float);  // Output: number  

let float2 = 5.; // floating-point literal without trailing zero
console.log(float2);  // Output: 5
console.log(typeof float2);  // Output: number  



//3.xponential notation can also be used with floating-point numbers
let expFloat = 1.5e3;
console.log(expFloat);  // Output: 1500
console.log(typeof expFloat);  // Output: number

let negativeExpFloat = 1.5e-3;
console.log(negativeExpFloat);  // Output: -0.0015
console.log(typeof negativeExpFloat);  // Output: number

let exp = 2E10; // exponential notation with uppercase E
console.log(exp);  // Output: 20000000000
console.log(typeof exp);  // Output: number