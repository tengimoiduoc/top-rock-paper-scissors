"use strict";
console.log("Hello, World");
// store players scores
let humanScore,
  computerSCore = 0;

// Get the computer choice, using Math.random + 3
function computerChoice() {
  let choice = Math.trunc(Math.random() * 3) + 1;
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(computerChoice());

// Get the human choice, using prompt function

// play single round
/*# create playRound function with two 
  parameters (humanChoice, computerChoice), 
  humanChoice case-sensitive
  #increment the score of human or computer*/

// play the entire game
/*# create function playGame and move playRound 
   and score inside of playGame
  # call playRound 5 times*/
