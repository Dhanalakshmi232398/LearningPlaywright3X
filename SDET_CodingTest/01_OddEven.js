//Check whether a number is Even or Odd.
function checkEvenOrAdd(number){
    if(number % 2 === 0){
        return `${number} is Even`;
    } else {
        return `${number} is Odd`;
    }
}

console.log(checkEvenOrAdd(98));  //98 is Even
console.log(checkEvenOrAdd(99));  //99 is Odd
