let nums = [10, 25, 30, 45];
let result = nums.find(x => x > 20);     //here x is temporary variable
console.log(result);

//findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);


//findLast
nums.findLast(n => n >20);      //45
nums.findLastIndex(n => n >20);   //3



