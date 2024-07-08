const choices = ["rock", "scissors", "paper"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

console.log(choices);

function playgame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You Win!";
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    result = "AI Win!";
  }

  playerDisplay.textContent = `Player choice: ${playerChoice}`;
  computerDisplay.textContent = `Computer choice: ${computerChoice}`;
  resultDisplay.textContent = `Result: ${result}`;
}
