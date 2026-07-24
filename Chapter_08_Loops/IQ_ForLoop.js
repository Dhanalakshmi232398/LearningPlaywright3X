// here _1 is a perfect variable
for (let _1 = 0; _1<=10; _1++){ //0 to 10 times -> 11
    console.log(_1);
}

// here 0>1 consition is false, so it wont go with the body content. And nothing will print.
for (let hello =0; hello > 1; hello++){
    console.log(hello);
}

// here condition is not mentioned but its a valid syntax. It will print the output like infinty 1 2 ......
for (let welcome = 0; ; welcome++);{
    console.log(welcome);
}



for (let babloo = 0; babloo < 18; babloo++){
    if(babloo >= 15) {
            console.log("Gift from dad, iphone this year.")
    } else {
        console.log("No iphone Gift, only barbie doll")
    }
}