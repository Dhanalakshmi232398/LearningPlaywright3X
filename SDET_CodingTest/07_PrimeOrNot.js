//Check whether a number is Prime or Not.
function isPrime(num){
    //1. Handle edge cases: numbers less than or equal to 1 are not prime
    if(num <= 1) return false;

    //2. 2 is the only even prime number.
    if(num === 2) return true;

    //3. Exclude all other even numbers
    if(num % 2 ===0 ) return false;

    //4. Check odd factors upto the square root of the number
    const limit = Math.sqrt(num);
    for(let i = 3; i<= limit; i += 2){
        if(num % i === 0){
            return false;  //found a divisor, so its not prime
        }
    }
    return true;  // no divisors found, it is prime
}

console.log(isPrime(13));  //true
console.log(isPrime(5));   //true
console.log(isPrime(4));   //false
console.log(isPrime(1));   //false