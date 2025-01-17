

const rockButton = document.querySelector('#btn1');
const paperButton = document.querySelector('#btn2');
const scissorsButton = document.querySelector('#btn3');
const userScore = document.querySelector('#userscore');
const compScore = document.querySelector('#compscore');
const display = document.querySelector('#display');


function getComputerChoice(){
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
    
}

rockButton.addEventListener('click', ()=> {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
})

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener('click', ()=>{
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
})



let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice){

  if(humanChoice === computerChoice){
    display.textContent = `It's a tie! , you both chose ${humanChoice}`;
    
    return;
  } 

  if( 
    (humanChoice == "rock" && computerChoice == "scissors")||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ){ 
 display.textContent = `You chose ${humanChoice}, Computer Chose ${computerChoice}, You win!`
 humanScore++;
 userScore.textContent = humanScore;
} else{
    display.textContent = `You chose ${humanChoice}, Computer Chose ${computerChoice}, You lose!`
    computerScore++;
    compScore.textContent = computerScore;
}
  if(computerScore == 5){
    display.textContent = "You lost the game"
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore == 5) {
    display.textContent = "You won the game"
    humanScore = 0;
    computerScore = 0;
  }
}









