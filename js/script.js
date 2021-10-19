

const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
computerInput = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log("Computer chose: " + computerInput); //this is to try what the computers chooses

//next line will print what the computer chose
var computerChose = document.getElementById('computer-chose');
computerChose.textContent = "Computer chose: " + computerInput;

var userChoseRock = document.getElementById('rock-button').addEventListener("click", functionRock);
var userChosePaper = document.getElementById('paper-button').addEventListener("click", functionPaper);
var userChoseScissors = document.getElementById('scissors-button').addEventListener("click", functionScissors);


let playerCounter = 0;
let computerCounter = 0;



function functionRock() {
  if (userChoseRock = 'rock-button' && computerInput == "PAPER") {
    console.log("computer chose paper");
    console.log("Computer Wins");
    computerCounter++;
  } else if (userChoseRock = 'rock-button' && computerInput == "SCISSORS") {
    console.log("computer chose scissors");
    console.log("User Wins");
    playerCounter++;
  } else {
    console.log("computer chose rock");
    console.log("No Winner");
  }
}

function functionPaper() {
  if (userChosePaper = 'paper-button' && computerInput == "SCISSORS") {
    console.log("computer chose scissors");
    console.log("Computer Wins");
    computerCounter++;
  } else if (userChosePaper = 'paper-button' && computerInput == "ROCK") {
    console.log("computer chose rock");
    console.log("User Wins");
    playerCounter++;
  } else {
    console.log("computer chose paper");
    console.log("No Winner");
  }
}

function functionScissors() {
  if (userChoseScissors = 'scissors-button' && computerInput == "ROCK") {
    console.log("computer chose rock");
    console.log("Computer Wins");
    computerCounter++;
  } else if (userChoseScissors = 'Scissors-button' && computerInput == "PAPER") {
    console.log("computer chose paper");
    console.log("User Wins");
    playerCounter++;
  } else {
    console.log("computer chose Scissors");
    console.log("No Winner");
  }
}
