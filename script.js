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
    if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++; 
        printScore();
        return "You lose! Paper beats Rock";
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        printScore();
        return "You win! Rock beats Scissors";
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        printScore();
        return "You win! Paper beats Rock";
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        printScore(); 
        return "You lose! Scissors beats Paper";
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++; 
        printScore();
        return "You lose! Rock beats Scissors";
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        printScore();
        return "You win! Scissors beats Paper";
    }
}

function printScore() {
    console.log("Player Score is " + playerScore + " Computer Score is " + computerScore);
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter your selection: (rock/paper/scissors)").toUpperCase();
        let computerSelection = computerPlay().toUpperCase(); 
        while(playerSelection === computerSelection) { //in the case of a tie
            playerSelection = window.prompt("Enter your selection: (rock/paper/scissors)").toUpperCase();
            computerSelection = computerPlay().toUpperCase(); 
            console.log("Draw");
        }
        console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
    }
}

game();

