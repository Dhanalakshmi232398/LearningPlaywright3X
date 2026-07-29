const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here
let minNum = arr[0];

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i];
    }
}
console.log(minNum);
