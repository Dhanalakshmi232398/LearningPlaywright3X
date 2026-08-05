function add(a, b, c){
    return a + b + c;
}

let numbers = [1, 2, 3];
add(...numbers); // Spread operator is used to pass the elements of the array as individual arguments to the function.
console.log(add(...numbers)); // Output: 6
console.log(numbers); // Output: [1, 2, 3] - The original array remains unchanged.





//-------------
function hasError(...codes){
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];
hasError(...responseCodes); // Spread operator is used to pass the elements of the array as individual arguments to the function.
console.log(hasError(...responseCodes));