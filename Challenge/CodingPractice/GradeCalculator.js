const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here

let score = data;

if (score >= 90 && score <= 100) {
    console.log("A");
}
else if (score >= 80 && score <= 89) {
    console.log("B");
}
else if (score >= 70 && score <= 79) {
    console.log("C");
}
else if (score >= 60 && score <= 69) {
    console.log("D");
}
else {
    console.log("F");
}