//Check whether a string is a Palindrome.
function isPalindrome(str){
    //Reverse the string and compare it to the original.
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("redivider"));   //true
console.log(isPalindrome("world"));        //false