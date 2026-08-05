
function greet(name){
    return `Hello! ${name}`; // using template literal to include the name in the greeting      
}

//Function as Expression
const greet1 = function(name1){
    return `Hello! ${name1}`; // using template literal to include the name in the greeting      
}

console.log(greet("Baby"));
console.log(greet1("Babloo"));