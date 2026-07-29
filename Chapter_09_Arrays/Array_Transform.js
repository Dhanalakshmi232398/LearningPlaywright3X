//----------------------MAP----------------------
let scores = [45, 82, 91, 60, 73];

let grades = scores.map(s => s > 70  ? "Pass" : "Fail");
console.log(grades);     //[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]
console.log(scores);    //   [ 45, 82, 91, 60, 73 ]

// Map my app is generally used whenever we want to transform the array into a new array of the same size.

//----------------------Filter----------------------
let passing = scores.filter(s => s >= 70);
console.log(passing);         //[ 82, 91, 73 ]

//-----------------------reduce--------------
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);       //351