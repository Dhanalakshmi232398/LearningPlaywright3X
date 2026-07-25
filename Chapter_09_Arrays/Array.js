//Empty array
let fruit = [];
console.log(fruit.length); //0

//Array examples:
let browsers = ["Chrome", "Firefox", "Webkit"];
console.log(browsers[0]); // chrome - index(0)
console.log(browsers.at(-1)); // Webkit -1 is a negative indexing function.. will come from last(reverse) of array.
console.log(browsers.at(0)); //chrome
console.log(browsers.length);  // 3

//for the negative indexed, use the at() function.
console.log(browsers[-1]); //undefined
console.log(browsers.at(-1)); // Webkit