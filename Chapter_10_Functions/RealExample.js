function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) { 
        console.log("Request is fine!");
    }
}


validateStatusCode(200); // Output: Request is fine!
validateStatusCode_Exp(200); // Output: Request is fine!
validateStatusCode_Arrow(200); // Output: Request is fine!