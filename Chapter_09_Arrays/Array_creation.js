// Array literal (prefered)
let browsers = ["Chrome", "Firefox", "safari"];

//array constructor
let scores = new Array(3);  // creates [empty X 3]
scores[0] = "1";  //adding elements to the array

let scores2 = new Array(1, 2, 3) //creates[1, 2, 3]

let numbers = new Array(100,200,300,400);

//Array.of()
let test = Array.of(10,20,30,40,50);
console.log(test.length);  //5

//Array.from()
let chars = Array.from("hello");
console.log(chars);  //[ 'h', 'e', 'l', 'l', 'o' ]