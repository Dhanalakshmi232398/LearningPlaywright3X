const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
const freq = new Map();
for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
}

let resultStrings = [];
for (let [num, count] of freq) {
    resultStrings.push(`${num} appears ${count} times`) 
}
console.log(resultStrings.join('\n'));
//return resultStrings.join(' ');