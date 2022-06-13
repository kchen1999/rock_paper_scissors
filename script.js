let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else if (randomNumber === 3) {
        return "Scissors";
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
        return;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        console.log("You win! Rock beats Scissors");
        return;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        console.log("You win! Paper beats Rock");
        return;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        console.log("You lose! Scissors beats Paper");
        return;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        console.log("You lose! Rock beats Scissors");
        return;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        console.log("You win! Scissors beats Paper");
        return;
    }
    return; 
}

function isValid(playerSelection) { //check if user input is valid 
    if (playerSelection === "ROCK") {
        return true;
    }
    else if (playerSelection === "SCISSORS") {
        return true;
    }
    else if (playerSelection === "PAPER") {
        return true;
    }
    else {
        return false;
    }
}

function isGameEnd() {
    if(playerScore == 5 || computerScore == 5) {
        return true; 
    }
    return false; 
}

function printEndResult() {
    if (playerScore > computerScore) {
        console.log("Player score: " + playerScore + " Computer score: " + computerScore +
            "\nCongratulations you win!!!")
    }
    else {
        console.log("Player score: " + playerScore + " Computer score: " + computerScore +
            "\nTough luck - you lose!")
    }
}

function game() {
    let buttons = document.querySelectorAll('button');
    let playerSelection = "";
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            playerSelection = e.target.textContent;
            console.log(playRound(playerSelection.toUpperCase(), computerPlay().toUpperCase()));
            if(isGameEnd()) {
                printEndResult(); 
            }
        });
    });
}

game();

