console.log("\tFizzBuzz\n")

for(i = 0; i <= 100; i++){

    a1 = i/15;
    a2 = i/3;
    a3 = i/5;

    if(i == 0){
        console.log(0);
    }

    else if(Number.isInteger(a1)){
        console.log("FizzBuzz");
    }

    else if(Number.isInteger(a2)){
        console.log("Fizz");
    }

    else if(Number.isInteger(a3)){
        console.log("Buzz");
    }

    else{
        console.log(i);
    }
    
}