const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt('Welcome to Mortgage Calculator!');

while (true) {
  prompt('---------------------------------');

  prompt('What is the loan amount?');

  let amount = readline.question();
  while (isInvalidNumber(amount)) {
    prompt('Must enter a positive number');
    amount = readline.question();
  }

  prompt("What is the interest rate?");
  prompt("(Example: 5 for 5% or 2.5 for 2.5%)");
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt('Must enter a positive number');
    interestRate = readline.question();
  }

  prompt("What is the loan duration (in years)?");
  let years = readline.question();

  while (isInvalidNumber(years)) {
    prompt('Must enter a positive number');
    years = readline.question();
  }
  /*Calculates anuale interst. Whole number of years to 
  decimal for interest rate percentage. 5/100=.05 or 5% */
  let annualInterestRate = Number(interestRate) / 100;
  /*Calculates monthly interest rate. Num from 
  anuale interest rate. .05/12=.00416 or .414% */
  let monthlyInterestRate = annualInterestRate / 12;
  /*Calculates loan payments per year. Number of years of 
  loan by 12. 30 * 12 is 360 payments. (monthly) */
  let months = Number(years) * 12;
  //let m = p * (j / (1 - Math.pow((1 + j), (-n)))); = mortgage calculation formnula
  let monthlyPayment = Number(amount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
