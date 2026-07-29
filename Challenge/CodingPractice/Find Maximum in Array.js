//Find Maximum in Array

const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
let maxNum = arr[0];

for (let i = 1; i <= arr.length;  i++){
    if (arr[i] > maxNum) {
        maxNum = arr[i];
    }
}
console.log(maxNum);

//(or)

/* const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
const maxVal = Math.max(...arr);
console.log(maxVal);
 */