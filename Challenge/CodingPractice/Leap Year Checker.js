const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
const year = Number(data);

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("YES");
} else {
    console.log("NO");
}