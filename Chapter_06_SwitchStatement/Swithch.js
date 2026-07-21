//Switch case
//Switch Case Expression - Number Most common
let day = 2;
switch(day){              //1-mon, 2-tue
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
}

//-------------------------- with little logics-------
let days = 2;
switch(days){              //1-mon, 2-tue
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        let a = 10;
        let b = 13;
        console.log(a+b);
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: 
        console.log("No idea which dai it is");
}

