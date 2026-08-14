function test(check, callMeWhenDone){
    console.log("Hi, start the test case"); //Hi, start the test case
    callMeWhenDone();
}

test("Verify the login page is working", async (page) =>{

});


function garimaStory(item, callMeWhenStoreIsEmpty){
    console.log("Store is busy!");
    //...
    console.log("Store is empty!!");
    callMeWhenStoreIsEmpty();
}

garimaStory("Starting Shopping", ()=>{
    console.log("Let's start shopping...");

});

/* Ans:
Hi, start the test case
Store is busy!
Store is empty!!
Let's start shopping...
 */