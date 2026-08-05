// Immediately Invoked Function Expression (IIFE) -(is a JavaScript function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.)
// They dont need to be called explicitly, they are invoked automatically. 

function name1() {
    console.log("Hello! Rithan");
}
name1(); // Output: Hello! Rithan


// IIFE function
(function(){
    console.log("Anonymous function");

})(); // Output: Anonymous function


(function (){
    console.log("Staging"); // Output: Staging
})(); 

//Arrow function IIFE

(() => {
    console.log("Setup Complete"); // Output: Setup Complete
})(); 

