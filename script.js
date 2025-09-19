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

function getHumanChoice() {
  let humanChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
