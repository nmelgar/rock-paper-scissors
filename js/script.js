
//counter of the played rounds
let playerCounter = 0;
let computerCounter = 0;


var userChoseRock = document.getElementById('rock-button').addEventListener("click", computerDecision);
var userChoseRock = document.getElementById('rock-button').addEventListener("click", functionRock);

var userChosePaper = document.getElementById('paper-button').addEventListener("click", computerDecision);
var userChosePaper = document.getElementById('paper-button').addEventListener("click", functionPaper);

var userChoseScissors = document.getElementById('scissors-button').addEventListener("click", computerDecision);
var userChoseScissors = document.getElementById('scissors-button').addEventListener("click", functionScissors);

const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
let computerInput;

function computerDecision() {
  computerInput = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  // console.log("Computer chose: " + computerInput); //this is to try what the computers chooses
  //next lines will print what the computer chose
  let computerChose = document.getElementById('computer-chose');
  computerChose.textContent = "Computer chose: " + computerInput;

}

function functionRock() {
  let roundResult = document.getElementById('result');
  if (userChoseRock = 'rock-button' && computerInput == "PAPER") {
    roundResult.textContent = "Computer Wins";

  } else if (userChoseRock = 'rock-button' && computerInput == "SCISSORS") {
    roundResult.textContent = "User Wins";

  } else {
    roundResult.textContent = "No winner";
  }
}

function functionPaper() {
  let roundResult = document.getElementById('result');
  if (userChosePaper = 'paper-button' && computerInput == "SCISSORS") {
    roundResult.textContent = "Computer Wins";

  } else if (userChosePaper = 'paper-button' && computerInput == "ROCK") {
    roundResult.textContent = "User Wins";

  } else {
    roundResult.textContent = "No winner";
  }
}

function functionScissors() {
  let roundResult = document.getElementById('result');
  if (userChoseScissors = 'scissors-button' && computerInput == "ROCK") {
    roundResult.textContent = "Computer Wins";

  } else if (userChoseScissors = 'scissors-button' && computerInput == "PAPER") {
    roundResult.textContent = "User Wins";

  } else {
    roundResult.textContent = "No winner";
  }
}


let playerNumbers = document.getElementById('player-counter');
playerNumbers.textContent = playerCounter;


let computerNumbers = document.getElementById('computer-counter');
computerNumbers.textContent = computerCounter;