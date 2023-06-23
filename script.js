//function that returns rock, paper, or scissors randomly 
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

//function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    //Convert playerSelection to lowercase
    playerSelection = playerSelection.toLowerCase();

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

//Event listeners for each button
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result-display');

rockButton.addEventListener('click', () => {
    const result = playRound('rock', getComputerChoice());
    updateResultDisplay(result);
});

paperButton.addEventListener('click', () => {
    const result = playRound('paper', getComputerChoice());
    updateResultDisplay(result);
});

scissorsButton.addEventListener('click', () => {
    const result = playRound('scissors', getComputerChoice());
    updateResultDisplay(result);
});

//Function to update the result display
function updateResultDisplay(result) {
    const resultElement = document.createElement('p');
    resultElement.textContent = result;
    resultDisplay.appendChild(resultElement);
}