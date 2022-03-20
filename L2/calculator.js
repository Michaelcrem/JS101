const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

while (true) {

  prompt('What is the first number?');

  let firstNumber = readline.question();
    while (isInvalidNumber(firstNumber)) {
    prompt('Must enter a number');
    firstNumber = readline.question();
  }

  prompt('What is the second number?');

  let secondNumber = readline.question();
  while (isInvalidNumber(secondNumber)) {
    prompt('Must enter a number');
    secondNumber = readline.question();
  }

  prompt('What opertaion would you like to perform?');

  prompt('1) Add, 2) Subtract, 3) Multiply, 4) Divide');

  let choice = readline.question();
  while (!['1','2','3','4'].includes(choice)) {
    prompt('Must enter 1, 2, 3 or 4');
    choice = readline.question();
  }

  let output;
  if (choice === '1') {
    output = Number(firstNumber) + Number(secondNumber);
  } else if (choice === '2') {
    output = Number(firstNumber) - Number(secondNumber);
  } else if (choice === '3') {
    output = Number(firstNumber) * Number(secondNumber);
  } else if (choice === '4') {
    output = Number(firstNumber) / Number(secondNumber);
  }

  prompt(`The result is: ${output}`);

  prompt('Would you like to perform another calculation? \ny for Yes, n for No.');
  let anotherCalc = readline.question();

  if (anotherCalc[0].toLowerCase() !== 'y') break;

}