// Async and Await
// Async Fn ->
//Await -> Fn (call)

// An async function always returns a promise.
// await reads the resolved value inside another async function.


async function getTestResults() {
    return "Pass";
}

getTestResults().then(function (results) {
    console.log(results);            //Pass
});

async function runTest() {
    let result = await Promise.resolve("Login test passed");
    console.log(result);           //Login test passed

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);          //Dashboard test passed
}

runTest();