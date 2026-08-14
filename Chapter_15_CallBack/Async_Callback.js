console.log("Test 1: started");

setTimeout(function (){
    console.log("Test 2: API response received!")
}, 2000);

console.log("Test 3 : Moving to next last");

/* Ans:
Test 1: started
Test 3 : Moving to next last
Test 2: API response received! (Its executed with 2seconds delay) */