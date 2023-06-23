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
    )   {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }   else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}


//Play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Repeat the function call 5 times using a for loop
    for (let round = 1; round <= 5; round ++) {
        const playerSelection = prompt("Enter your choice (rock, paper or scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${result}`);

        if (result.startsWith("You win!")) {
            playerScore++;
        }   else if (result.startsWith("You lose!")) {
            computerScore++;
        }
    }

    console.log(`Final Score: Player ${playerScore} - ${computerScore} Computer`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game");
    }   else if (playerScore < computerScore) {
        console.log("Oops! You lose the game!");
    }   else {
        console.log("It's a tie! The game ends in a draw.");
    }
}


//Start the game
game();