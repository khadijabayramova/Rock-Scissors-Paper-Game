const getContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  aiResult = document.querySelector(".ai_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image img"); // Corrected selector

// Debugging logs to check if elements are selected correctly
// console.log("Container:", getContainer);
// console.log("User result image:", userResult);
// console.log("AI result image:", aiResult);
// console.log("Result text:", result);
// console.log("Option images:", optionImages);

// Function to get AI's choice
function getAichoices() {
  const choices = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function getWinner(player, ai) {
  if (player === ai) {
    return "It's a tie";
  }

  if (
    (player === "rock" && ai === "scissors") ||
    (player === "scissors" && ai === "paper") ||
    (player === "paper" && ai === "rock")
  ) {
    return "You Win";
  } else {
    return "AI Win";
  }
}

// Function to display the choices
function displayChoices(playerChoice, aiChoice) {
  userResult.src = `/assets/imgs/${playerChoice}.png`;
  aiResult.src = `/assets/imgs/${aiChoice}.png`;
}

// Function to display the result
function displayResult(resultText) {
  result.textContent = resultText; // Corrected typo
}

// Adding event listeners to the option images
optionImages.forEach((option) => {
  option.addEventListener("click", (event) => {
    const playerChoice = option.alt; // Corrected way to get the player's choice
    const aiChoice = getAichoices(); // Corrected function call
    displayChoices(playerChoice, aiChoice);
    const winner = getWinner(playerChoice, aiChoice);
    displayResult(winner);
  });
});
