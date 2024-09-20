"use strict";

// playRound(humanChoice(), computerChoice());

function playGame() {
  // store players scores
  let humanScore = 0;
  let computerSCore = 0;

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
  // Get the human choice, using prompt function
  function humanChoice() {
    let choice = prompt("Rock, paper or scissors: ");
    return choice.toLocaleLowerCase();
  }
  // play round
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

  // call play round n time
  for (let i = 0; i < 5; i++) {
    let humanSelected = humanChoice();
    let computerSelected = computerChoice();

    playRound(humanSelected, computerSelected);
  }

  //compare scores and log the score and the winner to the console
  console.log("Your score: ", humanScore, "Computer score: ", computerSCore);
  if (humanScore > computerSCore) {
    console.log("You won the game! Congrats");
  } else if (humanScore < computerSCore) {
    console.log("Computer won the game! You suck");
  } else {
    console.log("Draw! play another game to decide the winner!");
  }
}

playGame();
