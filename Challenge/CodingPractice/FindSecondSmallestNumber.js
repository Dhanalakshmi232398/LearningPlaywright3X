const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

const uniqueSorted = [... new Set(arr)].sort((a, b) => a - b);       //Ascending order
console.log(uniqueSorted[1]);



/* const evens = arr.filter(num => num % 2 === 0);
const odds = arr.filter(num => num % 2 !== 0);

console.log(`Even Numbers: ${evens.join(' ')}`);
console.log(`Odd Numbers: ${odds.join(' ')}`); */


/* const n = parseInt(data.trim(), 10)
function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++){
        //check if divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
           result.push("FizzBuzz");
        }
        //check if divisible by 3
        else if (i % 3 === 0) {
            result.push("Fizz");
     //check if divisible by 5
        } else if (i % 5 === 0) {
            result.push("Buzz");
        }
        //otherwise print the number
        else {
            result.push(i.toString());
        }
    }
    console.log(result.join(' '))
}
fizzBuzz(n); */