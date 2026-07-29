const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
const seen = new Set();
const duplicates = new Set();

for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i]) && !duplicates.has(arr[i])) {
        console.log(arr[i]);
        duplicates.add(arr[i]);
    } else {
        seen.add(arr[i]);

    }
    }



        