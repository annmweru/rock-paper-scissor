function getComputerChoice() {
  const game = ['rock', 'paper', 'scissor'];
  const nameIndex = Math.floor(Math.random() * game.length);
  return game[nameIndex];
}
function getHumanChoice() {
  const choice = prompt('Enter a valid chioce: rock,paper or scissor');
  return choice;
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const winMassage = ` you win! ${humanChoice} beats ${computerChoice}`;
    const loseMassage = ` you lose! ${computerChoice} beats ${humanChoice}`;
    const tieMassage = `you both tie! both choose  ${humanChoice}`;

    if (humanChoice === computerChoice) {
      console.log(tieMassage);
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(winMassage);
      humanScore++; 
    } else {
      console.log(loseMassage);
      computerScore++; 
    }
  }
  for (let i = 0; i < 5; i++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    playRound(human, computer);
  }
  if (humanScore > computerScore) {
    console.log(
      `Game over human win witha score of ${humanScore}  to  ${computerScore} `
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Game over computer win with score of ${computerScore}  to  ${humanScore} `
    );
  } else {
    console.log(`its tie score of ${computerScore}  equal to ${humanScore} `);
  }
}
playGame();
