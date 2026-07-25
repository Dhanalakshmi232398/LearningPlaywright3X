let browser = ["chrome", "Firefox", "Safari", "Opera", "edge"];
console.log(browser.length);    //5

browser.pop();
console.log(browser);        //[ 'chrome', 'Firefox', 'Safari', 'Opera' ]

let removed = browser.shift();
console.log(browser);           //[ 'Firefox', 'Safari', 'Opera' ]
console.log(removed);           //chrome


for (let i = 0; i < browser.length; i++){
    console.log(browser[i]);
    if (browser[i] === "Opera"){
        console.log("Opera doesn't support Automation now!")
    }
}