// Run everything in seperate execution dont try in single page.
let p = new Promise(function (resolve, reject) {
    resolve(42);
 });

 p.then(function (value) {
    console.log("Answer:", value);   //Answer: 42
 });

 console.log("----------------------");


 let q = new Promise(function (resolve, reject) {
   reject("Something broke");
});

 q.catch(function (err) {
    console.log("Caught:", err);  //Caught: Something broke
});

console.log("----------------------");

 let m = Promise.resolve(5);

 m.then(function (val) {
    return val * 10;
 }).then(function (val) {
    console.log("Result:", val);     //Result: 50
 });

 console.log("----------------------");


Promise.resolve(1)
     .then(function (val) {
       console.log(val);
         return val + 1;
     })
     .then(function (val) {
         console.log(val);
         return val + 1;
     })
     .then(function (val) {
         console.log(val);
     });

/*  Ans:
1
2
3 */

console.log("----------------------");

 Promise.resolve("start")
     .then(function (value) {
         console.log(value);
         throw new Error("Broke at step 2");
     })
     .then(function () {
         console.log("This will NOT run");
     })
     .catch(function (err) {
         console.log("Caught:", err.message);    
     });

     /* Ans:
     start
     Caught: Broke at step 2 */

 console.log("----------------------");


Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    });

/* Ans:
Error: Test failed
Cleanup done */