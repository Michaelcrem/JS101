// Display the initial empty 3x3 board.
// Ask the user to mark a square.
// Computer marks a square.
// Display the updated board state.
// If it's a winning board, display the winner.
// If the board is full, display tie.
// If neither player won and the board is not full, go to #2
// Play again?
// If yes, go to #1
// Goodbye!
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';


function displayBoard(board){
  
  console.clear();	
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |  ');
  console.log('');
}


function initializeBoard() {
	let board ={}

	for(let square = 1; square <= 9; square += 1){
		board[String(square)] = INITIAL_MARKER;
	}
	return board;
}

function prompt(msg){
	console.log(`=> ${msg}`);
}

function emptySquares(board){
	return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board){
	return emptySquares(board).length === 0;
}

function someoneWon(board){
	return false;

}

function playerChoosesBoard(board){
  let square;

  while(true){
    prompt(`Choose a square ${emptySquares(board).join(', ')}: `);
    square = readline.question().trim();
	
	if(emptySquares(board).includes(square)) break;
	
	prompt('That is not a valid choice.');
	
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {

    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];

    board[square] = COMPUTER_MARKER;
}

function someoneWon(board){
	return !!detectWinner(board);
}

function detectWinner(board){
	let winningLines = [
	    [1,2,3], [4,5,6], [7,8,9], //row
	    [1,4,7], [2,5,8], [3,6,9],//column
	    [1,5,9], [3,5,9], ];      //diagonal



for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

let board = initializeBoard();
displayBoard(board);

while(true) {

  playerChoosesBoard(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if(someoneWon(board) || boardFull(board)) break;

}

if(someoneWon(board)){
	prompt(`${detectWinner(board)} won!`);
} else {
	prompt('It is a tie!')
}


