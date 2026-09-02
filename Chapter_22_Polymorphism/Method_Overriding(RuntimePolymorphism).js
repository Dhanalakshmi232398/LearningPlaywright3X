class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest{
    setup() {                             // if its not available in the child class, then it will go to the parent class and execute the function. This is called method overriding.
        console.log("APITest: open browser");
    }
}

let btest = new BaseTest();
let test = new APIPage();
test.setup();  //based on the object creation, it will call the function. If the function is not available in the child class, then it will go to the parent class and execute the function. This is called method overriding.
btest.setup();


/* Ans:
APITest: open browser
Base: open browser */


// TS = JS + Rules