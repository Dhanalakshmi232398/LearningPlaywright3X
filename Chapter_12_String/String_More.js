let str = "    Hello, World!   ";
console.log(str.toUpperCase());       //HELLO, WORLD! 
console.log(str.toLowerCase());  //hello, world!

//Trim whitespace

console.log(str.trim());     //Hello, World!

str.trimStart();
str.trimEnd();

//Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS");  // Test: PASS. Retry: PASS.
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS");  // REplace all with Regex

//Concatenation

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;
