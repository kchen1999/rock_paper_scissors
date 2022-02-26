let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) {
        return "Rock";
    }
    else if(randomNumber === 2){
        return "Paper"; 
    }
    else if(randomNumber === 3) {
        return "Scissors";
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection === computerSelection) { //in the case of a tie
        return "Draw";
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++; 
        return "You lose! Paper beats Rock";
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        return "You win! Rock beats Scissors";
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        return "You win! Paper beats Rock";
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++; 
        return "You lose! Scissors beats Paper";
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++; 
        return "You lose! Rock beats Scissors";
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        return "You win! Scissors beats Paper";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter your selection: (rock/paper/scissors)");
        let computerSelection = computerPlay(); 
        console.log(playRound(playerSelection, computerSelection));
    }
}

