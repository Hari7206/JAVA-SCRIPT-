// so here we are gonna create our game guess the number .
let gameNum = 33;
let userNUm = Number(prompt("Guess the number between 1 to 50")); // sp why we enter the number keyword here because the promt always pass the string . so here to convert our usernumber = number that why we use the number keyword here 
while (userNUm != gameNum) {
    if(userNUm <=30) {
        console.log("ohh very near look like you can guess");
    }
    else if (userNUm >= 40) {
        console.log("no not that far guess correctly");
        
    }
    userNUm = Number(prompt(" Enter again you enter the wrong number , try again "));
}
console.log("congratulation you enter the right number you win saaaaat crore");
