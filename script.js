function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getHumanChoice() {
    let humanChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
    return humanChoice;
  }

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
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    console.log('--------------------------------');
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final score! Human: ${humanScore} | Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log('Congratulations! You won');
  } else if (computerScore > humanScore) {
    console.log('Sorry! The computer won');
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
