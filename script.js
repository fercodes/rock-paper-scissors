//function that returns rock, paper, or scissors randomly 
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

//function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    //Check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    //Determine the winner
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

let playerScore = 0;
let computerScore = 0;
const scoreDisplay = document.getElementById('score-display');

//Event listeners for each button
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result-display');

rockButton.addEventListener('click', () => {
    const result = playRound('rock', getComputerChoice());
    updateResultDisplay(result);
    updateScore(result);
});

paperButton.addEventListener('click', () => {
    const result = playRound('paper', getComputerChoice());
    updateResultDisplay(result);
    updateScore(result);
});

scissorsButton.addEventListener('click', () => {
    const result = playRound('scissors', getComputerChoice());
    updateResultDisplay(result);
    updateScore(result);
});

//Function to update the result display
function updateResultDisplay(result) {
    const resultElement = document.createElement('p');
    resultElement.textContent = result;
    resultDisplay.appendChild(resultElement);
}

//Function to update the score display and check for a winner
function updateScore(result) {
    if (result.startsWith("You win!")) {
        playerScore++;
    } else if (result.startsWith("You lose!")) {
        computerScore++;
    }
    
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === 5) {
        announceWinner("Player");
    } else if (computerScore === 5) {
        announceWinner("Computer");
    }
}

//Function to announce the winner
function announceWinner(winner) {
    const winnerElement = document.createElement('p');
    winnerElement.textContent = `Congratulations! ${winner} wins the game!`;
    resultDisplay.appendChild(winnerElement);

    // Disable buttons after the game is over
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}