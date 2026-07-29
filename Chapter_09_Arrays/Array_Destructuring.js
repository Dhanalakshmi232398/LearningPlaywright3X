let [first, second, third] = [10, 20, 30];

console.log(first);    //10
console.log(second);     //20
console.log(third);       //30


let [firsts, seconds, ...thirds] = [10, 20, 30, 40, 50];
console.log(thirds);     //[ 30, 40, 50 ]