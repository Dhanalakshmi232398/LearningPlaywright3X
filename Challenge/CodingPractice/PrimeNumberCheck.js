const data = require('fs').readFileSync(0, 'utf8');
const num = parseInt(data.trim(), 10);
// Write your solution here
function isPrime(n) {
    if (n <= 1) return "NO";
    if (n <= 3) return "YES";

    if (n % 2 === 0 || n % 3 === 0) return "NO";

    for (let i = 5; i * i <= n; i += 6){
        if (n % i === 0 || n % (i + 2) === 0) {
            return "NO";

        }
    } 
    //return "XYZ" ? "YES" : "NO";
    return "YES";    
}
console.log(isPrime(num));