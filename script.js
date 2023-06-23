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


//PROBLEM HERE. I'd like to getelementbyid to my div created in html, not create an element
        const roundResult = document.getElementById('resultado');
        roundResult.innerHTML += `<pre>Round ${round}: ${result}</pre>`;

        if (result.startsWith("You win!")) {
            playerScore++;
        }   else if (result.startsWith("You lose!")) {
            computerScore++;
        }
    }
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    const finalScore = document.getElementById('resultado');
    finalScore.innerHTML += `<pre>Final Score: Player ${playerScore} - ${computerScore} Computer</pre>`;

//const roundResult = document.createElement('p');


    if (playerScore > computerScore) {
        const gameResult = document.getElementById('resultado');
        gameResult.innerHTML += `<pre>Congratulations! You win the game</pre>`;
    }   else if (playerScore < computerScore) {
        const gameResult = document.getElementById('resultado');
        gameResult.innerHTML += `<pre>Oops! You lose the game!</pre>`;
    }   else {
        const gameResult = document.getElementById('resultado');
        gameResult.innerHTML += `<pre>It's a tie! The game ends in a draw.</pre>`;
    }
}

//Link buttons to JavaScript
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');


//Event listeners for each button
rockButton.addEventListener('click', () => {
    const result = playRound('rock', getComputerChoice());
    const roundResult = document.createElement('p');
    roundResult.textContent = result;
    document.body.appendChild(roundResult);
  });
  
  paperButton.addEventListener('click', () => {
    const result = playRound('paper', getComputerChoice());
    const roundResult = document.createElement('p');
    roundResult.textContent = result;
    document.body.appendChild(roundResult);
  });
  
  scissorsButton.addEventListener('click', () => {
    const result = playRound('scissors', getComputerChoice());
    const roundResult = document.createElement('p');
    roundResult.textContent = result;
    document.body.appendChild(roundResult);
  });

//Start the game
game();