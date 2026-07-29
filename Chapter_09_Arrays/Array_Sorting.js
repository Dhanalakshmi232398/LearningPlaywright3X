// By alphabetically default
let fruits = ["banana", "cherry", "apple"];
fruits.sort();
console.log(fruits);      //[ 'apple', 'banana', 'cherry' ]

let score = [4,3,2];
console.log(score.sort());   //[2, 3, 4]

// Natural sorting - Lexicographic / string sort
let nums = [10,1,21,2];
nums.sort();
console.log(nums);                //[ 1, 10, 2, 21 ]

//proper sorting Asc, Dsec
let numss = [10,1,21,2];
numss.sort((a,b) => a-b);    //Ascending
console.log(numss);                //[ 1, 2, 10, 21 ]
  
numss.sort((a,b) => b-a);    //Descending
console.log(numss);              // [ 21, 10, 2, 1 ]

numss.reverse();
console.log(numss);           //[ 1, 2, 10, 21 ]

