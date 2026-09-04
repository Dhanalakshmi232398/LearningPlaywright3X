// Interface are used in API Testing

interface APIResponse{
    statuscode:number;
    body: string;
    headers?: object;            //if ? is used then it is optional to use in the object.
    responseTime: number;
}

let responseData: APIResponse = {
    statuscode:200,
    body: "{}",
    responseTime: 200
}

console.log("Status:", responseData.statuscode);
console.log("Body:", responseData.body);

let responseData2: APIResponse = {
    statuscode:200,
    body: "{}",
    headers: {},
    responseTime: 200
}


/* Ans:
Status: 200
Body: {}
 */

console.log("Status:", responseData2.statuscode);
console.log("Body:", responseData2.body);
console.log("Headers:", responseData2.headers);
console.log("Response Time:", responseData2.responseTime);

/* Ans:
Status: 200
Body: {}
Headers: {}
Response Time: 200 */