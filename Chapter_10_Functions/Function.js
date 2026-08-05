// Without functions - repeated logic
let score1 = 85;
let result1 = score1 >= 70 ? 'Pass' : 'Fail';   
console.log(result1); // Output: Pass

let score2 = 45;
let result2 = score2 >= 70 ? 'Pass' : 'Fail';   
console.log(result2); // Output: Fail

// Defining a function
function getResult(score) {
    return score >= 70 ? 'Pass' : 'Fail';
}

// calling a function
getResult(85); // Output: Pass
getResult(45); // Output: Fail

//=============================================================================

//example of function with parameters

// Defining a function with parameters
function sayHello(name) {
    console.log(name);
    //maybe 1000 line codes
}

//calling a function with parameters
sayHello("Rithan"); // Output: Rithan
sayHello("DhanaMathu"); // Output: DhanaMathu