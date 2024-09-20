"use strict";

function playGame() {
  // store players scores
  let humanScore = 0;
  let computerScore = 0;

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
      result(humanChoice, computerChoice);
      youLose();
      computerScore++;
      return;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      // rock > scissor
      result(humanChoice, computerChoice);
      youWin();
      humanScore++;
      return;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      // paper < scissor
      result(humanChoice, computerChoice);
      youLose();
      computerSCore++;
      return;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      // paper > rock
      result(humanChoice, computerChoice);
      youWin();
      humanScore++;
      return;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      // scissor < rock
      result(humanChoice, computerChoice);
      youLose();
      computerSCore++;
      return;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      // scissor > paper
      result(humanChoice, computerChoice);
      youWin();
      humanScore++;
      return;
    } else {
      console.log("Draw! No one win this round");
    }
  }

  // call play round 5 time
  for (let i = 0; i < 5; i++) {
    let humanSelected = humanChoice();
    let computerSelected = computerChoice();

    playRound(humanSelected, computerSelected);
  }

  //compare scores and log the score and the winner to the console
  console.log(`Your score: ${humanScore}
    Computer score: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("****You won the game! Congrats****");
  } else if (humanScore < computerScore) {
    console.log("****Computer won the game! You suck****");
  } else {
    console.log("****Draw! play another game to decide the winner!****");
  }

  // function for updating score
  function result(humanChoice, computerChoice) {
    console.log(`You: ${humanChoice} 
    Computer: ${computerChoice}`);
  }
  function youWin() {
    console.log("You won this round!");
  }
  function youLose() {
    console.log("You lost this round!");
  }
}

document.querySelector("button").addEventListener("click", playGame);
