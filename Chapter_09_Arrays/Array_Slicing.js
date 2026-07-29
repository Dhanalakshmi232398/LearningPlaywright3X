// Slicing and Combining

let arr = [1, 2, 3, 4, 5];
// slice (start, end) - returns new array.
// does NOT mutate actual -> (start, end-1).  Index = 0
// Don't give the end, it will automatically.
// take from start to end

console.log(arr.slice(1, 3));               //[ 2, 3 ]   here start index 1 the value is 2 and the end index is 3 but consideration is(3-1=2). so end index is 2 for that value is 3
console.log(arr);                            //[ 1, 2, 3, 4, 5 ]

console.log(arr.slice(2));    //[ 3, 4, 5 ] here starting index 2 for that value is 3 and no ending index mentioned. so it will print from index 2 till end of the array.
console.log(arr);            //[ 1, 2, 3, 4, 5 ]


console.log(arr.slice(0));    //[ 1, 2, 3, 4, 5 ]

console.log(arr.slice(-2));   // [ 4, 5 ]- negative index denotes right side to proceed. 
console.log(arr.slice(-3));   //[ 3, 4, 5 ]
console.log(arr.slice(-5));    //[ 1, 2, 3, 4, 5 ]

console.log(arr.slice(-3, -5));    //[] negative index denotation with slice wont proceed towards left. so answer is empty array[].