const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here
function isPalindrome(inputStr) {
    //Reverse the string and compare it to the original
    const reversedStr = inputStr.split('').reverse().join('');
    return inputStr === reversedStr;
}

    //check and print the required input format:
    if (isPalindrome(str)) {
        console.log("YES");
    } else {
        console.log("NO");
    
    }
 






