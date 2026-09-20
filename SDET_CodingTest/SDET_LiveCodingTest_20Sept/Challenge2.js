function isValidJsBasicsIdentifier(name) {
  // write your code here
  if (name === "let") {
    return false;
  }
  const rules = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return rules.test(name);
}


/* 
Examples
Input
isValidJsBasicsIdentifier("loginButton")
Output
true
Explanation:Allows camelCase identifier
Input
isValidJsBasicsIdentifier("$submit")
Output
true
Explanation:Allows dollar-prefixed identifier





Visible Test Cases
Case 1
Input: isValidJsBasicsIdentifier("loginButton")

Expected: true

Case 2
Input: isValidJsBasicsIdentifier("$submit")

Expected: true

Case 3
Input: isValidJsBasicsIdentifier("1login")

Expected: false

Case 4
Input: isValidJsBasicsIdentifier("let")

Expected: false */