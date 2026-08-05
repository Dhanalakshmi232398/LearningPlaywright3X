// Type 2 function - With arguement/parameter but no return type

function greetByName(name) {
    console.log("Hi! " + name);
}

greetByName("Rithan"); // Output: Hi! Rithan
greetByName("DhanaMathu"); // Output: Hi! DhanaMathu
greetByName("Rithan DhanaMathu"); // Output: Hi! Rithan DhanaMathu


let name1 = greetByName("Princess"); // Output: Hi! Princess
console.log(name1); // Output: undefined, because the function does not return anything