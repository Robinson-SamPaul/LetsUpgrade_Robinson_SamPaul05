console.log("\tPyramid\n")

z = 6;

for(r = 0; r < 6; r++){
    
    a = "";
    for(s = 0; s < z - 1; s++){
        a += " ";
    }

    b = "";
    for(c = 0; c < r; c++){
        b += "* ";
    }

    console.log(a+b);

    z -= 1;
}