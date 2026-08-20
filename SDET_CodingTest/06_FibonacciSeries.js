//Print the Fibonacci Series up to N terms.
function getFibonacciSeries(n){
    if(n <= 0) return [];
    if(n === 10) return [0];

    //initialize the first two terms
    const series = [0, 1];

    //Loop starts from index 2 up to n
    for(let i = 2; i<n ; i++){
        series.push(series[i-1] + series[i-2]);
    } 
  return series;  
}

console.log(getFibonacciSeries(8));


/* output
[
  0, 1, 1,  2,
  3, 5, 8, 13
]
 */