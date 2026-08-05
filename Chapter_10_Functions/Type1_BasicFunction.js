//Type 1- No parameter and no return ->     final return undefined


//Define
function greet() {
    console.log("Hi!");
}

//call
greet(); // Output: Hi!
greet(); // Output: Hi!

let output = greet(); // Output: Hi!
console.log(output); // Output: undefined





function openBrowser() {
    console.log("Opening Browser");
    // open the browser- its just printing the statement not return back anything
}


//Example:

function addLog(a,b){
    console.log(a + b);  // it will print something, returns nothing
}

let x = addLog(2, 3); // prints 5, returns nothing. x = undefined
console.log(x); // Output: undefined


console.log("--------------")

function addReturn(a,b){
    return a + b;  // gives value back to the caller
}

let y = addReturn(2, 4); // returns y = 5 (but does not print anything)
console.log(y); // Output: 6
