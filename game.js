
 let humanScore = 0;
let computerScore = 0;
function  getComputerChoice(){
const game = ['rock','paper','scissor']
const nameIndex = Math.floor(Math.random() * game.length)
 return game[nameIndex]

}

function getHumanChoice (){
    const  choice =  prompt ('Enter a valid chioce: rock,paper or scissor' )
    return  choice
}
 console.log(getHumanChoice())
function playRound(humanChoice,computerChoice){
   humanChoice =  humanChoice.toLowerCase()
const winMassage =  ` you win! ${humanChoice} beats ${computerChoice}`
const loseMassage =  ` you lose! ${computerChoice} beats ${humanChoice}`
const tieMassage =  `you both tie! both choose  ${humanChoice}`



 if (humanChoice === computerChoice ){
console.log(tieMassage)
 }else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
 ){
console.log(winMassage)
humanScore++; // Increment human score on win

 } else {
    console.log(loseMassage)
    computerScore++; // Increment computer score on loss

 }

 

}
let human = getHumanChoice();
let computer = getComputerChoice();
playRound(human, computer);
