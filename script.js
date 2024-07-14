// Initialize scores and round number
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random target number between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// Function to compare guesses and determine the winner
// Parameters: userGuess (human guess), computerGuess (computer guess), targetNumber (the actual number to guess)
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  // Calculate the absolute differences between the guesses and the target number
  const userDifference = Math.abs(userGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);

  // Determine the winner: return true if the human guess is closer or equal, otherwise return false
  return userDifference <= computerDifference;
};

// Function to update the score of the winner
// Parameter: winner (a string indicating who won, either 'human' or 'computer')
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1; // Increment human score by 1
  } else if (winner === 'computer') {
    computerScore += 1; // Increment computer score by 1
  }
};

// Function to advance to the next round
const advanceRound = () => {
  currentRoundNumber += 1; // Increment the current round number by 1
};
