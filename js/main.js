// Begin with function getComputerChoice that randomly returns Rock, Paper, or Scissors.

getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    /*if(randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2){
        return 'paper'
    } else if (randomNumber === 3){
        return 'scissors'
    } */
    switch(randomNumber){
        case 1: 
        return 'rock';
        break;
        case 2: 
        return 'paper'
        break; 
        case 3:
        return 'scissors'
        break;
    }
} 

console.log(getComputerChoice())
//Write a function that plays a single round of RPS. Function should take two parameters. (playerSelection,computerSelection) and then RETURN a string that declares the winner of the round. Ex: "You Lose! Paper Beats Rock" (Make case sensitive so users can input rock/Rock or any other variation)



