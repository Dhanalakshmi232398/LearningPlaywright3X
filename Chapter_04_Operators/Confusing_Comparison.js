//Rule of thumb
// == lose equality (does type coercion, surprising)
// === stricr equality (no coercion, what you usually want)

// Empty string Vs 0 vs "0" (transitivity broken)

//  "" will consider as 0
console.log("" == 0);      //true   -> "" coerced to Number ->  0
console.log("" === 0);     //false

console.log("0" == 0);      //true   -> "0" coerced to Number ->  0
console.log("0" === 0);     //false

console.log("" == "0");         //false  (its not an empty character. "0" -> 1 char in double quotes)
console.log("" === "0");       //false