let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c);   //[ 1, 2, 3, 4 ]

//    Spread (modern way) - concatenation. (...)
// ... all the element

let d = [...a,...b];
console.log(d);    //[ 1, 2, 3, 4 ]


// JOIN
// array into a big string
let s = ["pass", "fail", "skip"].join("|");
console.log(s);          //pass|fail|skip
