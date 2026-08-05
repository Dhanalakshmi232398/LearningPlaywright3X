//Type 3 - No Parameter/argument but Return type

function sayHello(){

    console.log("Hi!"); // prints Hi, returns nothing
    return "Hello!"; // returns Hello!, but does not print anything
}

let call = sayHello(); // prints Hi, returns Hello!  (If the below line is commented, it will print Hi only, but will not return Hello!)
console.log(call); // Output: Hello!



// Example:
function greetByHi(){
    //console.log("WhatsApp!"); // prints WhatsApp, returns nothing
    return "Hiiiiiiiiiiiiiiiiiiii!"; // returns Hi!, but does not print anything
}

let op = greetByHi(); // returns op = Hiiiiiiiiiiiiiiiiiiii! (but does not print anything)
console.log(op); // Output: Hiiiiiiiiiiiiiiiiiiii!