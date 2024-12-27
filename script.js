


function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
 let humanChoice = window.prompt("Enter the choice").toLowerCase();
 while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors")
  humanChoice = prompt("invalid Choice")
return humanChoice;
}

function playRound(humanChoice, computerChoice){

  if(humanChoice === computerChoice){
    console.log("It's a tie!")
    return;
  } 

  if( 
    (humanChoice == "rock" && computerChoice == "scissors")||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ){ 
 console.log('You win!')
 humanScore++;
} else{
    console.log('You lose!')
    computerScore++;
}
}

function playGame(){
    for (let i = 0; i < 5; i++) {
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);
}
console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer is the overall winner.");
    } else {
        console.log("It's an overall tie!");
    }
}
playGame();