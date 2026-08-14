const user = {
    name: "DhanaMathuRithan",
    age: 28,
    email: "dmr@gmail.com",
}
console.log(user);       //{ name: 'DhanaMathuRithan', age: 28, email: 'dmr@gmail.com' }

//Accessing Properties
console.log(user.name); //DhanaMathuRithan
console.log(user["age"]);  //28

//Addig/modifying properties
user.city  = "NYC";
user.age = 32;

console.log(user);  //
/* {
  name: 'DhanaMathuRithan',
  age: 32,
  email: 'dmr@gmail.com',
  city: 'NYC'
} */
