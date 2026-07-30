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