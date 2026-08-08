let url = "https://app.vwo.con?app=praomd";
console.log(url.replace(/app/g, "qa"));   //https://qa.vwo.con?qa=praomd  ->here g is global. app word is replacing by qa.

//Splitting & joining
"pass,fail,skip".split(","); //["pass", "fail", "skip"]
"hello".split("");  // ["h","e","l","l","o"]

//Template literal (joining with format)
let parts = ["2026", "03", "04"];
let date = parts.join("-");
console.log(date);           //2026-03-04
