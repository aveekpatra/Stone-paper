// // JS - rock, paper, scissor game

/*
The computer will randomly choose an option
Then you need to input an option
The computer will alert the user about the result
 */

// // Importing DOM element
let heading = document.getElementById("heading");

// // Declaring variables
// let promptChoice = prompt("Enter 1 for Rock, 2 for Paper or 3 for Scissor");
let promptChoice = Math.floor(Math.random() * 3);
// promptChoice = parseInt(promptChoice); // converting to int
// let userChoice = [null, "Rock", "Paper", "Scissor"][promptChoice];
let userChoice = ["Rock", "Paper", "Scissor"][promptChoice];
let compChoice = Math.floor(Math.random() * 3);
let gameValue = ["Rock", "Paper", "Scissor"][compChoice];

// // Check userChoice (manual function)
// function checkUserInput() {
//   if (promptChoice < 1) {
//     // alert("You entered an invalid number");
//     heading.innerText = "You entered an invalid number \n Enter 1, 2, or 3";
//   } else if (promptChoice > 3) {
//     // alert("You entered an invalid number");
//     heading.innerText = "You entered an invalid number \n Enter 1, 2, or 3";
//   } else if (userChoice === undefined) {
//     heading.innerText = "You entered an invalid number \n Enter 1, 2, or 3";
//   }
// }

// // Function to choose winner
const match = (gameValue, userChoice) => {
  if (gameValue === userChoice) {
    return "Nobody.\n It's a tie 🤝.";
  } else if (gameValue === "Rock" && userChoice === "Paper") {
    return "You.\n 🥳🎉";
  } else if (gameValue === "Rock" && userChoice === "Scissor") {
    return "Computer.\n 🥹 Try again next time.";
  } else if (gameValue === "Paper" && userChoice === "Rock") {
    return "Computer.\n 🥹 Try again next time.";
  } else if (gameValue === "Paper" && userChoice === "Scissor") {
    return "You.\n 🥳🎉";
  } else if (gameValue === "Scissor" && userChoice === "Rock") {
    return "You.\n 🥳🎉";
  } else if (gameValue === "Scissor" && userChoice === "Paper") {
    return "Computer.\n 🥹 Try again next time.";
  }
};

// // Showing the result
let result = match(gameValue, userChoice);
heading.innerText = `Computer's turn is: ${gameValue} \n User's turn is: ${userChoice} \n\n The winner is: ${result}`;

// // Play again
function playAgain() {
  location.reload();
}

// // User Input check
// checkUserInput();
