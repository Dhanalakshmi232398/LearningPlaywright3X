// call by value
//PRIMITIVE DATATYPE
//Primitive, number, string, boolean, null, undefined
let a = 10;
let b = a;
b = 99;
console.log(a);      //10
console.log(b);      //99
a =90;
console.log(a);      //90
console.log(b);      //99

console.log("---------------");

//OBJECTS - copied by Reference , call by Ref.
//Reference -- Object, Array, Function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);    //99