function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  // write your code here

    return  (passed * 2) - failed;
    //return Math.max(0, score);
  }

/* Examples:
Input
calculateJsBasicsWeightedScore(5, 2, 1)
Output
8
Explanation:Calculates mixed score
Input
calculateJsBasicsWeightedScore(3, 0, 0)
Output
6
Explanation:All pass gives double points */


/*   Visible Test Cases
Case 1
Input: calculateJsBasicsWeightedScore(5, 2, 1)

Expected: 8

Case 2
Input: calculateJsBasicsWeightedScore(3, 0, 0)

Expected: 6

Case 3
Input: calculateJsBasicsWeightedScore(1, 4, 3)

Expected: -2
 */
