//Comparison Operator will always return the result in  boolean format -> true/false

// =, == and ===
// = this is assignment operator we already disccussed

// = -- assignment opertor
// == -- loose comparision -> compares value only
// === -- strict comparision -> compares value + type

// >, < , >=, <= -- returns boolean 

console.log(3>4);
console.log(3<4);

console.log(4>=4);

console.log(4<=4); //( 4 = 4  0r 4 < 4------ example of OR gate)


console.log(5 == "5" );  // true  --------- loose comparision -> compares value only(it only check value it will not check type is same or not)
//both values should be same
//it will not check type
//data type should not check

console.log(5 === "5" ); // false --------- strict comparision -> compares value + type
//both values  should be same
//data type should same
//it will check type also

eg:
console.log(4 == 4) //true 
console.log(4 == "4") //true

//! -> not
console.log(5 != "5");  //false     lose-datatype or value
console.log(5 !== "5"); //true
//console.log(5 !=== "5"); //does not exist