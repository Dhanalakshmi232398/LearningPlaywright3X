// Searching

let results  = ["pass", "fail", "pass", "error", "fail"];

//indexOf - return first index or -1 if not found
results.indexOf("fail");  //1
results.indexOf("skip");   //-1

//lastIndexOf - searches from the end
results.lastIndexOf("fail");   //4

//includes - returns boolean
results.includes("error");   //true