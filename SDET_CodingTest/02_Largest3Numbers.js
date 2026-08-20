//Find the Largest of 3 Numbers.
function findLargest(a, b, c){
    if(a>=b && a>=c){
        return a;
    } else if (b>=a && b>=c){
        return b;
    } else {
        return c;
    }
}
console.log(findLargest(3,23,20));      //23