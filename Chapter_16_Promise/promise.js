let order = new Promise(function(resolve, reject){

    let foodReady  = true;
    if(foodReady){
        resolve("Pizza is delivered");
     }else{
        reject("order cancelled");
     }
});

console.log(order);  //Promise { 'Pizza is delivered' } bcoz foodReasy is true.