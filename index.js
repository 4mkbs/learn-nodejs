#! /usr/bin/env node
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to print the welcome message
function printWelcomeMessage() {
  console.log("Welcome to the Number Guessing Game!");
  console.log("I'm thinking of a number between 1 and 100.");
  console.log(
    "You have a limited number of chances to guess the correct number."
  );
  console.log("Let's have some fun!");
}

// Function to select the difficulty
function selectDifficulty(callback) {
  console.log("\nPlease select the difficulty level:");
  console.log("1. Easy (10 chances)");
  console.log("2. Medium (5 chances)");
  console.log("3. Hard (3 chances)");

  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        callback(10);
        break;
      case "2":
        callback(5);
        break;
      case "3":
        callback(3);
        break;
      default:
        console.log("Invalid choice. Please choose 1, 2, or 3.");
        selectDifficulty(callback);
    }
  });
}

// Function to play the game
function playGame(chances) {
  const numberToGuess = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const startTime = Date.now();

  console.log(
    `\nGreat! You have selected a difficulty with ${chances} chances.`
  );
  console.log("Let's start the game!");

  function askForGuess() {
    rl.question("\nEnter your guess: ", (input) => {
      const guess = parseInt(input);

      if (isNaN(guess)) {
        console.log("Invalid input. Please enter a valid number.");
        askForGuess();
        return;
      }

      attempts++;
      if (guess < numberToGuess) {
        console.log("Incorrect! The number is greater than your guess.");
      } else if (guess > numberToGuess) {
        console.log("Incorrect! The number is less than your guess.");
      } else {
        const endTime = Date.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
        console.log(
          `\nCongratulations! You guessed the correct number in ${attempts} attempts.`
        );
        console.log(`Time taken: ${timeTaken} seconds.`);
        playAgain(() => {
          main();
        });
        return;
      }

      if (attempts >= chances) {
        console.log(
          `\nSorry, you've used all ${chances} chances. The correct number was ${numberToGuess}.`
        );
        playAgain(() => {
          main();
        });
        return;
      }

      askForGuess();
    });
  }

  askForGuess();
}

// Function to ask if the user wants to play again
function playAgain(callback) {
  rl.question("\nDo you want to play again? (yes/no): ", (answer) => {
    if (answer.toLowerCase() === "yes") {
      callback();
    } else {
      console.log("Thanks for playing! Goodbye.");
      rl.close();
    }
  });
}

// Main function to run the game
function main() {
  printWelcomeMessage();

  selectDifficulty((chances) => {
    playGame(chances);

    playAgain(() => {
      main();
    });
  });
}

// Start the game
main();
