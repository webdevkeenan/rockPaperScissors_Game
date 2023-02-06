// Display results in console

console.log('----Results---')

// Begin with function getComputerChoice that randomly returns Rock, Paper, or Scissors.

getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1
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
//console.log(getComputerChoice())

//Write a function that plays a single round of RPS. Function should take two parameters. (playerSelection,computerSelection) and then RETURN a string that declares the winner of the round. Ex: "You Lose! Paper Beats Rock" (Make case sensitive so users can input rock/Rock or any other variation)

//Player Score
let playerScore = 0
let computerScore = 0

//Function that plays a single round against the computer.
const playRound = (playerSelection , computerSelection) => {
    if(playerSelection === computerSelection){
        return `It\'s a tie! Both picked ${playerSelection}!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++ 
        return 'You Lose! Paper Beats rock!!!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You Win!!! Rock beats scissors!!!' 
    }  else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You Win!!!! Paper beats rock!!!' 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You Lose! Scissors beats paper!!' 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'You Win!!! Scissors beats paper!!!' 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'You Lose! Rock beats scissors!'
    }
} 

// Function with a loop that plays 5 rounds against the computer and returns result.
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Let\'s play 5 rounds! :D (CTRL + Shift + I to see results)' , 'Type: Rock, Paper, or Scissors').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))

    }

    if (playerScore > computerScore) {
        return prompt('You Won! Congratulations!!! :D', 'GAME OVER (Refresh the page)')
    } else if (playerScore < computerScore) {
        return prompt('You Lose!!! Try again :(' , 'GAME OVER (Refresh the page)')
    } else {
        return prompt('Tie. Try again!!!' , 'GAME OVER (Refresh the page)')
    }
}

console.log(game())

//Finished. Return to project later to  learn how to fix prompt messages so game can be played from prompt only.
