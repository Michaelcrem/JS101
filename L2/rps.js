const readline = require('readline-sync');
const VALID_CHOICES = ['r','p','s'];

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {

  prompt('Welcome to Rock-Paper-Scissors!');
  prompt(`Choose: ${VALID_CHOICES.join(', ')} for Rock, Paper, Scissors.`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`This is not a valid choice. Choose: ${VALID_CHOICES.join(', ')} for Rock, Paper, Scissors.`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === 'r' && computerChoice === 's') {
    prompt('You Win!');
  } else if (choice === 's' && computerChoice === 'p') {
    prompt('You Win!');
  } else if (choice === 'p' && computerChoice === 'r') {
    prompt('You Win!');
  } else if (choice === 'r' && computerChoice === 'p') {
    prompt('Computer Wins!');
  } else if (choice === 's' && computerChoice === 'r') {
    prompt('Computer Wins!');
  } else if (choice === 'p' && computerChoice === 's') {
    prompt('Computer Wins');
  } else {
    prompt("It's a tie!");
  }

  prompt('Would you like to play again?');
  prompt("Enter 'n' for no or 'y' for yes.");
  let playAgain = readline.question();

  if (playAgain === 'y') {
    continue;
  } else {
    break;
  }

}