function getStatus(code){
    if(code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client Error";
    if(code >= 500 && code < 600) return "Server Error";
}

getStatus(200);
getStatus(404);
getStatus(500);

//Return nothing - undefined
function logTest(name){
    console.log(`Running: ${name}`);
    // no return statement      
}

logTest("Hi this is a log")

function aaa(){
    return [2, 2, 3, 5, 4];
    /// return {"name : Rithan"} - object
}