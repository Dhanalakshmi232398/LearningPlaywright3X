console.log("Enter the number:");
const data = require('fs').readFileSync(0, 'utf8');
console.log("Hi", data);

/* On Windows
After typing 15, press
Ctrl+Z
Enter */


//cmdOutput:
/* 15
^Z
Hi 15 */