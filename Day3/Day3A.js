console.log("\tPalindrome\n")

a = "My Mom and Dad learnt Malayalam from my Madam";
a += " ";
a = a.toLowerCase();
x = "";
y = "";

for(t of a){

    if(t != " "){
        x += t;
        y = t + y;
    }

    else{

        if(x == y){
            console.log(x.toUpperCase(), "is a Palindrome.")
        }

        else{
            console.log(x.toUpperCase(), "isn't a Palindrome.")
        }

        x = "";
        y = "";
        
    }
}
