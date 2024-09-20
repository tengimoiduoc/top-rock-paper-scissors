"use strict";

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

// console.log(computerChoice());

// Get the human choice, using prompt function
function humanChoice() {
  let choice = prompt("Rock, paper or scissors: ");
  return choice.toLocaleLowerCase();
}

// console.log(humanChoice());
// play single round
/*# create playRound function with two 
  parameters (humanChoice, computerChoice), 
  
  #increment the score of human or computer*/

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    // rock < paper
    console.log("You lose!");
    computerSCore++;
    return;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    // rock > scissor
    console.log("You win, yay!");
    humanScore++;
    return;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    // paper < scissor
    console.log("You lose!:((");
    computerSCore++;
    return;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    // paper > rock
    console.log("You win, yay!");
    humanScore++;
    return;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    // scissor < rock
    console.log("You lose!:((");
    computerSCore++;
    return;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    // scissor > paper
    console.log("You win, :))");
    humanScore++;
    return;
  } else {
    console.log("Draw!");
  }
}

playRound(humanChoice(), computerChoice());

// play the entire game
/*# create function playGame and move playRound 
   and score inside of playGame
  # call playRound 5 times*/
