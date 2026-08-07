// Scope in Functions

let env = "staging";    //Global scope

function setUpConfig(){
        let timeout = 3000;    // Local scope
        console.log(env);    //can access global
        console.log(timeout);    //can access local
}

setUpConfig();
console.log(env); 
console.log(timeout);  // Reference Error - not accessible



let g_x = 10;

function outer(){
    let x = 10;

    function inner(){
        let y = 20;
        console.log(x);   // inner can access outer's
    }

    inner();
    console.log(y);  // outer cannot access inner's variable.       
}
