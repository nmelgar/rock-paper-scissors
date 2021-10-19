//User
// var userInput = prompt("What you choose, Rock, Paper or Scissors?");
//console.log(userInput.toUpperCase());

//Computer
const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
computerInput = computerOptions[Math.floor(Math.random() * computerOptions.length)];
// console.log("Computer chose: " + computerInput);

var userChose = document.getElementById('rock-button', 'paper-button', 'scissors-button');


var computerChose = document.getElementById('computer-chose');
computerChose.textContent = "Computer chose: " + computerInput;

var gameResult = document.getElementById('result');
// gameResult.textContent = gameRound;

// function playRound() {
//   if (userChose == "ROCK" && computerInput == "PAPER") {
//     console.log("Computer Wins");
//   } else if (userInput == "ROCK" && computerInput == "SCISSORS") {
//     document.write("User Wins!");
//   } else if (userInput == "ROCK" && computerInput == "ROCK") {
//     document.write("No Winner!");
//   }

// }

// var gameRound = playRound();
