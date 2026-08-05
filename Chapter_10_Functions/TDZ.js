// TDZ with let

{
    console.log(a);
    let a = 10;
}


// Enter Block
// ↓
// a is created ✅
// a has NO value ❌
// ↓
// console.log(a) ❌ Error (TDZ)
// ↓
// let a = 10;
// ↓
// a = 10 ✅


{
    console.log(a);
    var a = 10;
}
// var hoisting
// Enter Block
// ↓
// a is created ✅
// a has value undefined ✅
// ↓
// console.log(a) => undefined
// ↓
// var a = 10;
// ↓
// a = 10 ✅
