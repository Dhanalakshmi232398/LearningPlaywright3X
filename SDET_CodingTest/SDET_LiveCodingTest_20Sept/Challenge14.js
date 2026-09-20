function buildJsBasicsChecklist(items) {
  // write your code here
  let index = 1;
  let result = [];

  for (let i = 0; i < items.length; i++){
    let item = items[i].trim();
    // skip items that are empty or contain only a placeholder  string like "-"
    if (item === "" || item === "-") {
      continue;
    }
    result.push(`"${index}. ${item} - TODO"`);
    index++;
    
  }
  return `[${result.join(",")}]`;
}


/* Examples
Input
buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
Output
["1. Install Node - TODO","2. Create GitHub repo - TODO"]
Explanation:Builds numbered checklist
Input
buildJsBasicsChecklist(["Practice switch"," ","Push code"])
Output
["1. Practice switch - TODO","2. Push code - TODO"]
Explanation:Skips blank checklist items


Visible Test Cases
Case 1
Input: buildJsBasicsChecklist(["Install Node","Create GitHub repo"])

Expected: ["1. Install Node - TODO","2. Create GitHub repo - TODO"]

Case 2
Input: buildJsBasicsChecklist(["Practice switch"," ","Push code"])

Expected: ["1. Practice switch - TODO","2. Push code - TODO"] */