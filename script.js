"use strict";

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const totalRounds = 5;

// Function to get computer's choice
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Function to determine the winner
function determineWinner(human, computer) {
  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (human === computer) {
    return "Draw! No one wins this round.";
  } else if (computer === winningCombos[human]) {
    humanScore++;
    return `You won this round! ${human} beats ${computer}.`;
  } else {
    computerScore++;
    return `You lost this round! ${computer} beats ${human}.`;
  }
}

// Function to update the UI
function updateUI(result) {
  document.getElementById("resultText").textContent = result;
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;
}

// Function to display final result after 5 rounds
function displayFinalResult() {
  let finalMessage = `Final Score: Human ${humanScore} - Computer ${computerScore}. `;
  if (humanScore > computerScore) {
    finalMessage += "You won the game! Congrats!";
  } else if (computerScore > humanScore) {
    finalMessage += "You lost the game, better luck next time!";
  } else {
    finalMessage += "It's a draw!";
  }

  document.getElementById("resultText").textContent = finalMessage;
}

// Adding event listeners for the buttons
document.getElementById("rock").addEventListener("click", function () {
  playRound("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playRound("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  playRound("scissors");
});

// Function to play a single round
function playRound(humanSelected) {
  if (roundCount < totalRounds) {
    const computerSelected = computerChoice();
    const result = determineWinner(humanSelected, computerSelected);
    updateUI(result);
    roundCount++;

    // If all rounds are completed, display final result
    if (roundCount === totalRounds) {
      displayFinalResult();
    }
  }
}

// Resetting the game
document.getElementById("playButton").addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  updateUI("Make your choice to start the game!");
});
