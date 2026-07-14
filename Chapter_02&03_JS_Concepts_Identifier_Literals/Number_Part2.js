// 3. Numeric seperators

let million = 1_000_000; // numeric separator for better readability
console.log("seperator 1_000_000:", million);  // Output: 1000000
console.log(typeof million);  // Output: number

let binarySep = 0b1010_0001; // binary literal with numeric separator
console.log("seperator 0b1010_0001:", binarySep);  // Output: 161
console.log(typeof binarySep);  // Output: number

let hexSep = 0xFF_FF; // hexadecimal literal with numeric separator
console.log("seperator 0xFF_FF:", hexSep);     // Output: 65535   
console.log(typeof hexSep);  // Output: number


// 4. BigInt - for arbitrary large integers

let big = 1234567890123456789012345678901234567890n; // BigInt literal
console.log(big);  // Output: 1234567890123456789012345678901234567890n
console.log(typeof big);  // Output: bigint

let big2 = BigInt("1234567890123456789012345678901234567890"); // BigInt using constructor
console.log(big2);  // Output: 1234567890123456789012345678901234567890n
console.log(typeof big2);  // Output: bigint

let bigfromNum = BigInt(42); // BigInt from number
console.log(bigfromNum);        // Output: 42n
console.log(typeof bigfromNum);  // Output: bigint


//5. Special numeric values

// Infinity
let positiveInfinity = Infinity; // positive infinity
console.log(positiveInfinity);  // Output: Infinity
console.log(typeof positiveInfinity);  // Output: number    

console.log("1 / 0:", 1 / 0);  // Output: Infinity
cosole.log("-1 / 0:", -1 / 0);  // Output: -Infinity
console.log("typeof Infinity:", typeof Infinity);  // Output: number

//-Infinity
let negativeInfinity = -Infinity; // negative infinity
console.log(negativeInfinity);  // Output: -Infinity
console.log(typeof negativeInfinity);  // Output: number    


// NaN (Not a Number)
let notANumber = NaN; // NaN literal
console.log(notANumber); // Output: NaN
console.log(typeof notANumber);  // Output: number (NaN is of type number in JavaScript)

console.log("0 / 0:", 0 / 0); // Output: NaN
console.log("'hello' * 2:", "hello" * 2); // Output: NaN
console.log("typeof NaN:", typeof NaN);  // Output: number (quirky)
