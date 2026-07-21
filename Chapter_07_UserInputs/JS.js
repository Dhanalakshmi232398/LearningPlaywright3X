// not mandatory
let num = prompt("Enter a number:");
num = Number(num);  //Convert string to number

if(num % 2 === 0){
    console.log(num +"is Even");
} else {
     console.log(num +"is Odd");
}


// it will get error bcoz its web function and its not a nodejs function.