function countPassingJsBasicsChecks(results) {
  // write your code here

  return results.filter(result => result.toLowerCase().includes('pass')).length;

}



/* Examples
Input
countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])
Output
2
Explanation:Counts mixed pass/fail data
Input
countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])
Output
2
Explanation:Handles uppercase PASS


Visible Test Cases
Case 1
Input: countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])

Expected: 2

Case 2
Input: countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])

Expected: 2

Case 3
Input: countPassingJsBasicsChecks(["one-fail","two-skip"])

Expected: 0 */