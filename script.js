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

function printScore() {
    const container = document.querySelector("#results"); 
    container.textContent = "Player score: " + playerScore + " Computer Score: " + computerScore; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
        printScore(); 
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        printScore();
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        printScore();
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        printScore();
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        printScore();
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        printScore();
    }
    
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
            playRound(playerSelection.toUpperCase(), computerPlay().toUpperCase());
            if(isGameEnd()) {
                printEndResult(); 
            }
        });
    });
}

game();

