//  Checking Arrays

// check if something IS an array

let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);     //true - its an group of elements mentioned in array
console.log(result1);   // false -  its not an array bcoz only one element placed.


// map, filter, reduce

//every, some

// every -ALL must pass
[80, 90, 95].every(s => s>= 70);    //true
[80, 60, 95].every(s => s>= 70);     //false

// some -AT LEAST ONE must pass
[80, 60, 95].every(s => s< 70);   //true
[80, 90, 95].every(s => s< 70);   //false