let a = "Rithan";

if(true){
    console.log(a);   //local variable , TDZ - //ReferenceError Cannot access 'a' before initialization
    let a = "temp";

}

// Temporal Dead Zone

// Global scope
// a = "Rithan"
// Enter the block- block scope
// a = TDZ (exist but not initialized)
// console.log(a);
