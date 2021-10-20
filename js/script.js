//counter of the win rounds
let playerCounter = 0;
let computerCounter = 0;

let playerNumbers = document.getElementById('player-counter');
playerNumbers.textContent = playerCounter;
let computerNumbers = document.getElementById('computer-counter');
computerNumbers.textContent = computerCounter;


//buttons of user's decisions
var userChoseRock = document.getElementById('rock-button').addEventListener("click", computerDecision);
var userChoseRock = document.getElementById('rock-button').addEventListener("click", functionRock);

var userChosePaper = document.getElementById('paper-button').addEventListener("click", computerDecision);
var userChosePaper = document.getElementById('paper-button').addEventListener("click", functionPaper);

var userChoseScissors = document.getElementById('scissors-button').addEventListener("click", computerDecision);
var userChoseScissors = document.getElementById('scissors-button').addEventListener("click", functionScissors);

//computer decisions
const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
let computerInput;

function computerDecision() {
  computerInput = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  // console.log("Computer chose: " + computerInput); //this is to try what the computers chooses
  //next lines will print what the computer chose
  let computerChose = document.getElementById('computer-chose');
  computerChose.textContent = "Computer chose: " + computerInput;
}

//this holds the result of each round
let roundResult = document.getElementById('result');

//functions of rock, paper and scissors options
function functionRock() {
  if (userChoseRock = 'rock-button' && computerInput == "PAPER") {
    roundResult.textContent = "Computer Wins";

  } else if (userChoseRock = 'rock-button' && computerInput == "SCISSORS") {
    roundResult.textContent = "User Wins";

  } else {
    roundResult.textContent = "No winner";
  }
  //counter
  if (roundResult.textContent == "User Wins") {
    playerNumbers.textContent = "Player: " + (playerCounter += 1);
  } else if (roundResult.textContent == "Computer Wins") {
    computerNumbers.textContent = "Computer: " + (computerCounter += 1);
  }
  finalResult();
}

function functionPaper() {
  if (userChosePaper = 'paper-button' && computerInput == "SCISSORS") {
    roundResult.textContent = "Computer Wins";

  } else if (userChosePaper = 'paper-button' && computerInput == "ROCK") {
    roundResult.textContent = "User Wins";

  } else {
    roundResult.textContent = "No winner";
  }
  //counter
  if (roundResult.textContent == "User Wins") {
    playerNumbers.textContent = "Player: " + (playerCounter += 1);
  } else if (roundResult.textContent == "Computer Wins") {
    computerNumbers.textContent = "Computer: " + (computerCounter += 1);
  }
  finalResult();
}

function functionScissors() {
  if (userChoseScissors = 'scissors-button' && computerInput == "ROCK") {
    roundResult.textContent = "Computer Wins";

  } else if (userChoseScissors = 'scissors-button' && computerInput == "PAPER") {
    roundResult.textContent = "User Wins";

  } else {
    roundResult.textContent = "No winner";
  }
  //counter
  if (roundResult.textContent == "User Wins") {
    playerNumbers.textContent = "Player: " + (playerCounter += 1);
  } else if (roundResult.textContent == "Computer Wins") {
    computerNumbers.textContent = "Computer: " + (computerCounter += 1);
  }
  finalResult();
}

//function to restart the counter to 0
var startAgain = document.getElementById('start-again').addEventListener("click", restartGame);

function restartGame() {
  computerNumbers.textContent = computerCounter = 0;
  playerNumbers.textContent = playerCounter = 0;
  //this line will delete the final result of the winner
  finalResultText.textContent = " ";
  roundResult.textContent = " ";
}

let finalResultText;

function finalResult() {
  finalResultText = document.getElementById('final-result');
  if (computerCounter == 5) {
    finalResultText.textContent = "Computer defeats player!";
  } else if (playerCounter == 5) {
    finalResultText.textContent = "Player defeats computer!";
  }
}