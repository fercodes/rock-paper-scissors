let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  showMessage(`You chose: ${humanChoice}`);
  showMessage(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    showMessage(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    showMessage(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    showMessage(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  updateScoreDisplay();

  if (humanScore === 5 || computerScore === 5) {
    playGame();
    disableButtons();
    return;
  }
}

function playGame() {
  showMessage(`Final score! Human: ${humanScore} | Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    showMessage('Congratulations! You won');
  } else if (computerScore > humanScore) {
    showMessage('Sorry! The computer won');
  } else {
    showMessage("It's a tie game!");
  }
}

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const scoreDisplay = document.createElement('div');
const messageDisplay = document.createElement('div');

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';
scoreDisplay.style.marginTop = '20px';
messageDisplay.style.marginTop = '20px';

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(scoreDisplay);
document.body.appendChild(messageDisplay);

rockButton.onclick = () => {
  playRound('rock', getComputerChoice());
};

paperButton.onclick = () => {
  playRound('paper', getComputerChoice());
};

scissorsButton.onclick = () => {
  playRound('scissors', getComputerChoice());
};

function updateScoreDisplay() {
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function showMessage(text) {
  const p = document.createElement('p');
  p.textContent = text;
  messageDisplay.appendChild(p);
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}
