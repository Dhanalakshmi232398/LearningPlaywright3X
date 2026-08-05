var a = 10;
console.log(a); // Output: 10
// var - function-scoped(), Traitor.


//Define
function printHello(){
    console.log("Hello");
    var a = 20; // var is function-scoped, so this 'a' is different from the one defined in the global scope.
    console.log(a); // Output: 20
    if(true){
        var a = 30; // var is function-scoped, so this 'a' is the same as the one defined in the function scope.
        console.log(a); // Output: 30
        }

        console.log(a); // Output: 30 - The 'a' defined in the if block is hoisted to the function scope, so it overwrites the previous 'a' defined in the function scope.
}

printHello();



// let - Block scoped
let b = 20;  // Global scope
console.log(b); // Output: 20

function printWorld(){
    console.log("World");
    let b = 30; // Local scope
    console.log(b); // Output: 30
    if(true){
        let b = 5;
        console.log(b); // Output: 5 - The 'b' defined in the if block is block-scoped, so it does not overwrite the previous 'b' defined in the function scope.
        }
        console.log("let ->", b); // Output: 30 - The 'b' defined in the if block is block-scoped, so it does not overwrite the previous 'b' defined in the function scope.
}

//calling the function  
printWorld();
console.log(b);

// let does not allow u to have a redclaration
let g = 10;
let g = 20; // SyntaxError: Identifier 'g' has already been declared            

// var allows u to have a redclaration
var h = 10;
var h = 20; // No error, 'h' is redeclared and its value is updated to 20

// not possible
var nn = "Rithan";
let nn = "Rithan"; // NOt allowed!-SyntaxError: Identifier 'nn' has already been declared using var, so it cannot be redeclared using let in the same scope.

// if it reverse like let declared first then var declared second, it will also give an error
let mm = "Rithan";
var mm = "Rithan"; // NOt allowed!-SyntaxError: Identifier 'mm' has already been declared using let, so it cannot be redeclared using var in the same scope.

const pi = 3.14; // Constant variable, cannot be reassigned 
console.log(pi); // Output: 3.14
pi = 3.14159; // TypeError: Assignment to constant variable. - Cannot reassign a constant variable


const z = [1, 2, 3]; // Constant variable, cannot be reassigned
z.push(9);
console.log(z); // Output: [1, 2, 3, 9] - 
// The array itself is constant, but its contents can be modified.

