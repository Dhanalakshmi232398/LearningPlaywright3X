//1.
async function sayHello() {
    return "Hello, QA!";
}
sayHello().then(function (msg) {
    console.log(msg);              //Hello, QA!
});


/// ---
//2.
async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code:", status);           //Status code: 200
}
getStatus();



//3.
async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified dashboard");
    console.log(step3);
}

testFlow();

/* Ans:
Opened browser
Clicked login
Verified dashboard
 */


//4.
async function riskyTest() {
    try {
        let data = await Promise.reject("Element not found");
        console.log(data);
    } catch (err) {
        console.log("Test failed:", err);               //Test failed: Element not found
        
    }
}

riskyTest();



//5.
async function apiTest() {
    try {
        let response = await Promise.resolve({ status: 201, body: "Created" });
        console.log("Status:", response.status);
        console.log("Body:", response.body);
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Test complete");
    }
}

apiTest();

/* Ans:
Status: 201
Body: Created
Test complete */


//6.
console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");

/* Ans:
A
B
D
C */