const max=prompt("Enter the maximum number");

const generate=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

let count=0;

while(true){
    if(guess=="quit"){
        console.log("user quit the game...");
        break;
    }
    if(guess==generate){
        console.log("Congrat's You guess correct number!!!");
        count++;
        break;
    }
    else if(guess>generate){
        guess=prompt(`Please enter lesser than the ${guess}`);
        count++;
    }
    else{
        guess=prompt(`Please enter greater than the ${guess}`);
        count++;
    }
    
}
console.log(`you guess the number in ${count} counts`);

