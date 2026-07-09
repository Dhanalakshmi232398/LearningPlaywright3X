let x = 10;   //simple code 
console.log(x); //simple code --> no compilation or optimization required, interpretation is enough.


// Complex code below also called as hot code --> requires compilation and optimization
for (let i= 0; i < 500; i++) {
    console.log(i);
    badcodeFn();

    function badcodeFn() {
        console.log("Hello, this is a bad code function");
    }
}