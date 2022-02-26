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
        console.log("You lose! Paper beats Rock");
        return;
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        console.log("You win! Rock beats Scissors");
        return;
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        console.log("You win! Paper beats Rock");
        return;
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        console.log("You lose! Scissors beats Paper");
        return;
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        console.log("You lose! Rock beats Scissors");
        return;
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        console.log("You win! Scissors beats Paper");
        return;
    }
}
 
function isValid(playerSelection) { //check if user input is valid 
    if(playerSelection === "ROCK") {
        return true; 
    }
    else if(playerSelection === "SCISSORS") {
        return true; 
    }
    else if(playerSelection === "PAPER") {
        return true;
    }
    else {
        return false; 
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter your selection: (rock/paper/scissors)").toUpperCase();
        let computerSelection = computerPlay().toUpperCase(); 
        while(playerSelection === computerSelection || !isValid(playerSelection)) { //in the case of a tie or invalid user prompt
            playerSelection = window.prompt("Enter your selection: (rock/paper/scissors)").toUpperCase();
            computerSelection = computerPlay().toUpperCase(); 
        }
        console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
    }
    if(playerScore > computerScore) {
        console.log("Player score: " + playerScore + " Computer score: " + computerScore + 
        "\nCongratulations you win!!!")
    }
    else {
        console.log("Player score: " + playerScore + " Computer score: " + computerScore + 
        "\nTough luck - you lose!")
    }
}

game();

