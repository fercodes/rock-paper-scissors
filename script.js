//function that returns rock, paper or scissors randomly 
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

//Start the game
const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);