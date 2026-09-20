function filterSupportedJsBasicsTopics(topics) {
  // write your code here
  const supportedTopics = new Set(['node', 'v8', 'npm', ]);
  const normalized = topics.map(t => t.toLowerCase().trim());
  const uniqueFiltered = [...new Set(normalized.filter(topic => supportedTopics.has(topic)))];
  return uniqueFiltered;
}



/* Examples
Input
filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])
Output
["node","v8"]
Explanation:Normalizes known terms
Input
filterSupportedJsBasicsTopics(["node","runtime","node"])
Output
["node"]
Explanation:Removes duplicates


Visible Test Cases
Case 1
Input: filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])

Expected: ["node","v8"]

Case 2
Input: filterSupportedJsBasicsTopics(["node","runtime","node"])

Expected: ["node"]

Case 3
Input: filterSupportedJsBasicsTopics(["npm","node","v8"])

Expected: ["npm","node","v8"] */