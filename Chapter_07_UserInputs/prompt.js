// not mandatory - it will run in terminal
const prompt = require("Prompt-Sync")();

let num = Number(prompt("Enter a number:"));

if(num % 2 === 0){
    console.log(num +"is Even");
} else {
     console.log(num +"is Odd");
}

