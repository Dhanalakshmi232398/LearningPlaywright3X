const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

const uniqueSorted = [... new Set(arr)].sort((a, b) => b - a);       //Descending order
console.log(uniqueSorted[1]);