let as =  {status: "pass"};
console.log(as.status);      //pass
console.log(as["status"]);   //pass

let a1 =  {status: 'pass'};
console.log(a1.status);   //pass

//keys are case sensitive
let a22 ={status: "pass", Status: "fail"};
console.log(a22["status"]);    //pass
console.log(a22["Status"]);      //fail

let a =  {status: "pass"};
let b = a;  //b copies REFERENCE, not the object
b.status = "fail";
console.log(a.status);//fail    
console.log(b.status); //fail

let c =  {status: "pass"};
let d =  {status: "pass"};
console.log(c === d); //false

const t_json = {
    "name": "pramod", 
    "age": 10

};
console.log(t_json);      //{ name: 'pramod', age: 10 }