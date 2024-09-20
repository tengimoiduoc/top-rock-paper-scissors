"use strict";

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Function to get computer's choice
  function computerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
  }
  // Function to get human's choice
  function humanChoice() {
    return prompt("Rock, paper or scissors: ").toLocaleLowerCase();
  }

  // Function to determine  the winner
  function determineWinner(humanChoice, computerChoice) {
    const winningCombos = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (humanChoice === computerChoice) {
      console.log("Draw! No one wins this round");
    } else if (computerChoice === winningCombos[humanChoice]) {
      humanScore++;
      console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
      return "human";
    } else {
      computerScore++;
      console.log(
        `You lost this round! ${computerChoice} beats ${humanChoice}`
      );
      return "computer";
    }
  }
  // Function to play multiple rounds and determine the overall winner
  function playRounds(rounds = 5) {
    for (let i = 0; i < rounds; i++) {
      const humanSelected = humanChoice();
      const computerSelected = computerChoice();

      console.log(`You: ${humanSelected}, Computer: ${computerSelected}`);
      determineWinner(humanSelected, computerSelected);
    }
  }

  //Play rounds
  playRounds();

  // Final result
  console.log(`Your score: ${humanScore}\nComputer score ${computerScore}`);
  if (humanScore > computerScore) {
    console.log(`***You won the game! Congrats`);
  } else if (humanScore < computerScore) {
    console.log(`***You lost the game, sucker!`);
  } else {
    console.log("***Draw");
  }
}

document.querySelector("button").addEventListener("click", playGame);
