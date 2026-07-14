//Rule of thumb
// == lose equality (does type coercion, surprising)
// === stricr equality (no coercion, what you usually want)

console.log("Confusing comarison in JS");

//------------------- null vs undefined ------------------
//null is some thing greater than zero 
//null is not a blank

console.log(null == undefined);    //true -> special rule in ==
console.log(null === undefined);    //false -> different types


console.log(null == 0);    //false  -> null only == undefined/null
console.log(null === 0);   //false

console.log(null > 0);      //false
console.log(null >= 0);     //true   coerces null to 0 (gotcha!)
//console.log(null < 0);      //false
//console.log(null <= 0);     //false             true
console.log(null == 0 || null > 0); // false  but null >= 0 is true