
let browser = "Edge";

switch(browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser - uses JavaScriptcore engine");
        break;
    default:
        console.log("Unknown browser - Manual testing needed");
}





let browsers = "Brave12";

switch(browsers){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser - uses JavaScriptcore engine");
        break;
    default:
        console.log("Please pass correct browsername "+browsers);
}