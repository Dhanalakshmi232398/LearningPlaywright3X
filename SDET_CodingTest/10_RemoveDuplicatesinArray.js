//Remove Duplicate Values from an Array.
const duplicates = [2,3,20,23,3,2,9,99,9];

const unique = [...new Set(duplicates)];
console.log(unique);   //[ 2, 3, 20, 23, 9, 99 ]






// using filter
const repeated = ['apple', 'guava', 'banana', 'orange','guava', 'apple'];

const clear = repeated.filter((item, index) => repeated.indexOf(item) === index);
console.log(clear);  //[ 'apple', 'guava', 'banana', 'orange' ]