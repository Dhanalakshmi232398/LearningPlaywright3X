// normal function
function greet(name){
    return `Hello! ${name}`; // using template literal to include the name in the greeting      
}

// function as expression
const greet1 = function(name1){
    return `Hello! ${name1}`; // using template literal to include the name in the greeting      
}


//Arrow Function

//If u want to make a normal function to arrow function.
//Remove the keyword function, remove the keyword return, remove the curly braces and add => after the parameter/argument.

const greet2 = (name2) => `Hello! ${name2}!`; // using template literal to include the name in the greeting


console.log(greet("Our Family")); 
console.log(greet1("Rithan")); // Output: Hello! Rithan!
console.log(greet2("DhanaMathu")); // Output: Hello! DhanaMathu!




//======================================================
//More Examples of Arrow Function

function doubleMe(a){
    return a * 2; // returns the double of a
}

const doubleMe1 = (a) => a * 2; // returns the double of a
doubleMe1(5); // returns 10


const getEnv = () => "staging"; // returns the value of the environment variable staging
console.log(getEnv()); // Output: staging

// Multi-line arrow function
const getResult = (score) => 
{
    if(score >= 90) return "Pass";
     return "Fail";
}

console.log(getResult(95)); // Output: Pass
console.log(getResult(50)); // Output: Fail