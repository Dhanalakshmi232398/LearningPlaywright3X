console.log(greeting);
var getting = "Hello";
console.log(getting);

// Behind the scenes:
// var greeting;             <---- hoisted with undefined
//console.log(greeting);        <---------undefied
// greeting = "Hello";         <---------assignment stays in place
// console.log(greeting)        <--------"Hello"