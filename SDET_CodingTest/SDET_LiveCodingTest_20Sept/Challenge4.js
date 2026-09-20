function getJsBasicsKeywordMeaning(term) {
  // write your code here
  const map = { node: "runtime", v8: "engine", npm: "package-manager" };
  return map[term?.trim().toLowerCase()] || "unknown";
  
}


/* Examples
Input
getJsBasicsKeywordMeaning("NODE")
Output
"runtime"
Explanation:Maps node correctly
Input
getJsBasicsKeywordMeaning(" v8 ")
Output
"engine"
Explanation:Maps v8 correctly


Visible Test Cases
Case 1
Input: getJsBasicsKeywordMeaning("NODE")

Expected: "runtime"

Case 2
Input: getJsBasicsKeywordMeaning(" v8 ")

Expected: "engine"

Case 3
Input: getJsBasicsKeywordMeaning("npm")

Expected: "package-manager"

Case 4
Input: getJsBasicsKeywordMeaning("not-a-topic")

Expected: "unknown" */