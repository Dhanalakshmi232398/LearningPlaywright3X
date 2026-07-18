// --------------------Increment Operator---------------
// Pre Increment
let a = 10;
a = a + 1;
console.log(a);

let b = 10;
let c = ++b;
console.log(c);


// Post Increment
let d = 20;
let e = d++;  
console.log(e); //20 ->d
console.log(d);  //21 (20+1)

//=============part2 - Solve using ERT method

let x = 10;
console.log(++x + x);
console.log(x);

let y = 10;
console.log(++y + y + y++);
console.log(y);

let i = 1;
let result = i++ + ++i;
console.log(result,i);


let z = 10;
console.log(++z + ++z);
console.log(z);


let m = 34;
let results = m++;
console.log(results);
console.log(m);

//task done in paper ref once.



//-------------------Decrement Operator---------------

// Pre Decrement
let f = 10;
let g = --f;
console.log(g);
console.log(f);

//Post Decrement
let j = 10;
let k = j--;
console.log(k);
console.log(j);

