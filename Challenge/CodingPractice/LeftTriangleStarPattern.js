const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here
for (let i = n; i > 0; i--){
    console.log('*'.repeat(i));
}