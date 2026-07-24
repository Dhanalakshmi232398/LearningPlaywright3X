let attempts = 0; //init
while(attempts < 3){
    console.log("Attempt", attempts);
    attempts++;
}

let modi = 1;
while(modi<=15){    //1 to 15 times ->15
    console.log("Modi will do 15+ years");
    modi++;
}

let age = 7;
while (true){
        if(age > 10){  //when age reach 11 then the conditoin is true and in body is having break. So it will end.
            break;
        }
        console.log(age);
        age++;
}



//=====================While Vs For loop==================
//if the condition having false, then nothing will be print further it will completely skip.
let ages = 7;
while (false){
        if(ages > 10){  //when age reach 11 then the conditoin is true and in body is having break. So it will end.
            break;
        }
        console.log(ages);
        ages++;
}