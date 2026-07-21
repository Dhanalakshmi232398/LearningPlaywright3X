//Switch
//0- sunday 1- monday 2- Tuesday and so on

// 1. With break statement
let days = 3;
switch(days){
    case 0:
        console.log("Sunday - Rest Day");
        break;
    case 1:
        console.log("Monday - Sprint planning");
        break;
    case 2:
        console.log("Tuesday - Development");
        break;
    case 3:
        console.log("Wednesday - Code review");
        break;
    case 4:
        console.log("Thursday - Deployment");
        break;
    case 5:
        console.log("Friday - Testing");
        break;
    case 6:
        console.log("Saturday - Rest Day");
        break;
    default:
        console.log("Invalid day");
}




//2. without break
let day = 2;
switch(day){
    case 0:
        console.log("Sunday - Rest Day");
    case 1:
        console.log("Monday - Sprint planning");
    case 2:
        console.log("Tuesday - Development");
    case 3:
        console.log("Wednesday - Code review");
    case 4:
        console.log("Thursday - Deployment");
    case 5:
        console.log("Friday - Testing");
    case 6:
        console.log("Saturday - Rest Day");
    default:
        console.log("Invalid day");
}



//3.  not match with case
let dayss = 9;
switch(dayss){
    case 0:
        console.log("Sunday - Rest Day");
        break;
    case 1:
        console.log("Monday - Sprint planning");
        break;
    case 2:
        console.log("Tuesday - Development");
        break;
    case 3:
        console.log("Wednesday - Code review");
        break;
    case 4:
        console.log("Thursday - Deployment");
        break;
    case 5:
        console.log("Friday - Testing");
        break;
    case 6:
        console.log("Saturday - Rest Day");
        break;
    default:
        console.log("Invalid day value");
}

//4. without break
 let fruit ="banana";
switch(fruit){
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "Gauva":
        console.log("Gauva Selected");
    case "PineApple":
        console.log("PineApple selected");
    default:
        console.log("Fruit name is not listed "+fruit);
}


//5. 
let testScore=85;
switch(true){
    case(testScore >=95 ):
        console.log("Outstanding - Top Performer");
        break;
    case(testScore >=85 ):
        console.log("Excellent - Above Expectation ");
        break;
    case(testScore >=70):
        console.log("Good - Meets expectation");
        break;
    case(testScore >=50):
        console.log("Okay Needs imprement");
        break;
    default:
        console.log("Unsatisfactory - Requires Training");
}


//6. 
let x = 10;
switch(x){
    case 10:
        let b1=1;
        console.log(b1);
        break;
    case 10:
        let b2=2;
        console.log(b2);
        break;
    default:
        console.log("no variable value")
}


//7. 
let status = 0;     //0 its a number type. so its Strictly match with number 0 case
console.log(typeof status);
switch(status){
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 Matched");
        break;
}
// strict comparison - value and datatype both of them should be same.