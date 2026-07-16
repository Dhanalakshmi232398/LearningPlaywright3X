// Multiple conditions

let age = 27;
//  age > 18 -> he will go goa, not else;
// drink > 26 -> yes, else no

let is_person_enjoy =  age > 18 ? (age > 26 ? "Drink" : "No") : "false" ;
console.log(`Can_Person_Drink? : ${is_person_enjoy}`);