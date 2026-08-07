greet("Alice");


function greet(name){
    console.log("Hi")
    return `Hello, ${name}!` ;
}


sayHi("Bob");

const sayHi = function (name){
    return `Hi, ${name}!`;  // TypeError-  Cannot access 'sayHi' before initialization . sayHi is not a         function  

};