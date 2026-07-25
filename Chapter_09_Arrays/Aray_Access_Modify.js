// Accessing and modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]); //pass
console.log(statuses[1]);  //fail

console.log(statuses.at(-1)); //skip
console.log(statuses.at(-2)); //fail

console.log(statuses.at(-4)); //undefined bcoz it has only 3 elements.
console.log(statuses[-1]);  //undefined

//Modifying
statuses[1] = "blocked";
console.log(statuses); //Chapter_09_Arrays

//length
console.log(statuses.length); //3