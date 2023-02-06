// Begin with function getComputerChoice that randomly returns Rock, Paper, or Scissors.

getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    // Written in If/Else Statement
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

//Check getComputerChoice function.
console.log(getComputerChoice())
//Write a function that plays a single round of RPS. Function should take two parameters. (playerSelection,computerSelection) and then RETURN a string that declares the winner of the round. Ex: "You Lose! Paper Beats Rock" (Make case sensitive so users can input rock/Rock or any other variation)


playRound = (playerSelection , computerSelection) => {
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper Beats Rock!!!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win!!! Rock beats scissors!!!'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\s a tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win!!!! Paper beats rock!!!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats paper!!'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\s a tie!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win!!! Scissors beats paper!!!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats scissors!'
    }
}

const playerSelection = 'rock'
let computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))