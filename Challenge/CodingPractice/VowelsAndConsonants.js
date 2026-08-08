const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here
//fine character groups
vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

let vowelsCount = 0;
let consonantsCount = 0;

//Iterate through the input string
for (let i = 0; i < str.length; i++){
    const char = str[i];

    //check if the character id a lowercase Endlish letter
    if (char >= 'a' && char <= 'z') {
        if (vowelSet.has(char)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
        }
    }
console.log(`Vowels: ${vowelsCount}`);
console.log(`Consonants: ${consonantsCount}`);
