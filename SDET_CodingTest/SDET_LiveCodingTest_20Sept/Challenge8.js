function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
  // write your code here
  const baseDefaults = {
    retries: 0
  };
  return {
    ...baseDefaults,
    ...defaultConfig,
    ...overrideConfig
  };
}


/* Examples
Input
mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})
Output
{"retries":3,"env":"dev"}
Explanation:Override retries wins
Input
mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})
Output
{"env":"qa","timeout":5000,"retries":0}
Explanation:Adds missing retries default


Visible Test Cases
Case 1
Input: mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})

Expected: {"retries":3,"env":"dev"}

Case 2
Input: mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})

Expected: {"env":"qa","timeout":5000,"retries":0}

Case 3
Input: mergeJsBasicsConfig({"env":"dev","retries":2}, {"env":"stage"})

Expected: {"env":"stage","retries":2}

 */