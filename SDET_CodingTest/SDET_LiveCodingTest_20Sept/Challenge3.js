function classifyJsBasicsScore(score) {
  // write your code here
  if (score >= 90) {
    return "EXCELLENT";
  } else if (score >= 75) {
    return "GOOD";
  } else if (score >= 50) {
    return "NEEDS_PRACTICE";  
  } else {
    return "REVISIT";
  }
}


/* Examples
Input
classifyJsBasicsScore(95)
Output
"EXCELLENT"
Explanation:High score is excellent
Input
classifyJsBasicsScore(75)
Output
"GOOD"
Explanation:Boundary 75 is good


Visible Test Cases
Case 1
Input: classifyJsBasicsScore(95)

Expected: "EXCELLENT"

Case 2
Input: classifyJsBasicsScore(75)

Expected: "GOOD"

Case 3
Input: classifyJsBasicsScore(50)

Expected: "NEEDS_PRACTICE"

Case 4
Input: classifyJsBasicsScore(32)

Expected: "REVISIT" */