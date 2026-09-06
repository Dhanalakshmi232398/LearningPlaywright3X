function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse<string>(200, "admin");
console.log(userResp);


let flagResp = wrapResponse<boolean>(200, true);
console.log(flagResp);


/* Ans:
{ statusCode: 200, data: 'admin' }
{ statusCode: 200, data: true } */