function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  // write your code here
  const cleanSuite = suiteName.trim();
  const cleanEnv = environment.trim().toLowerCase();
  return ` ${cleanSuite} | ${cleanEnv} | build-${buildNumber}`;

  console.log(buildJsBasicsRunLabel("Smoke Suite", "STAGING", 42));
  console.log(buildJsBasicsRunLabel("Regression", "PROD", 7));
}
/* 
Examples
Input
buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
Output
"Smoke Suite | staging | build-42"
Explanation:Builds staging smoke label
Input
buildJsBasicsRunLabel("Regression", "PROD", 7)
Output
"Regression | prod | build-7"
Explanation:Builds prod regression label


Visible Test Cases
Case 1
Input: buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)

Expected: "Smoke Suite | staging | build-42"

Case 2
Input: buildJsBasicsRunLabel("Regression", "PROD", 7)

Expected: "Regression | prod | build-7" */