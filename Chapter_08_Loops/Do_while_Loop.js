let retry = 0;
do{
    console.log("Execute a code!");
    console.log("Retrying....." + retry);
    retry++;
}while (retry<3);





//=====================Do While Vs While loop======================


// for eg:
//nothing will print bcoz 10<10 is false.
let a = 10;
while (a < 10){
    console.log(a);
    a++;
}

//Do While Vs While loop- example
let a = 10;
do{
    console.log(a);
    a++;
}while(a<10)
