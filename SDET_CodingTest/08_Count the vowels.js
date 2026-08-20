//Count the Vowels in a given string.
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

console.log(countVowels("Hello! World!!"));    //3
console.log(countVowels("Apple"));             //2