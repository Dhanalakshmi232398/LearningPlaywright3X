//qn 1:
var a = "Pramod";

if(true){
    console.log(a); 
    var a = "temp";
    console.log(a);
    
}
/* // output:
Pramod
temp */

//qn 2:
let b = 10;
console.log(b);
if(true){
    console.log(b);
    let b = 20;

}
/* // output:
10
ReferenceError: Cannot access 'b' before initialization */

//qn 3:
const score = 100;
//score = score + 10; -- not possible with the re declaration

const pi = 3.14;
const prod_api_url = "https://app.vwo.com/#login";
// prod_api_url = "https://google.com";
const qa_api_url = "https://qa.vwo.com/#login";


let abc = "anil";
console.log(abc);
