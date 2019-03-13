'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function boardMarker(id){
  document.getElementById(id).innerHTML=playerTurn;
  
  }
// function printBoard() {
//   console.log('   0  1  2');
//   console.log('0 ' + board[0].join(' | '));
//   console.log('  ---------');
//   console.log('1 ' + board[1].join(' | '));
//   console.log('  ---------');
//   console.log('2 ' + board[2].join(' | '));
// }

function horizontalWin() {
  if ((board[0][0] === playerTurn) && (board[0][1] === playerTurn) && (board[0][2] === playerTurn)) {
    return true;
  }
  else if ((board[1][0] === playerTurn) && (board[1][1] === playerTurn) && (board[1][2] === playerTurn)) {
    return true;
  }
  else if ((board[2][0] === playerTurn) && (board[2][1] === playerTurn) && (board[2][2] === playerTurn)) {
    return true;
  }
  else
  {
    return false;
  }
}

function verticalWin() {
  if ((board[0][0] === playerTurn) && (board[1][0] === playerTurn) && (board[2][0] === playerTurn)) {
    return true;
  }
  else if ((board[0][1] === playerTurn) && (board[1][1] === playerTurn) && (board[2][1] === playerTurn)) {
    return true;
  }
  else if ((board[0][2] === playerTurn) && (board[1][2] === playerTurn) && (board[2][2] === playerTurn)) {
    return true;
  }
  else
  {
    return false;
  }
}

function diagonalWin() {
  if ((board[0][0] === playerTurn) && (board[1][1] === playerTurn) && (board[2][2] === playerTurn)) {
    return true;
  }
  else if ((board[0][2] === playerTurn) && (board[1][1] === playerTurn) && (board[2][0] === playerTurn)) {
    return true;
  }
  else
  {
    return false;
  }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()){
    // console.log(playerTurn + 'Wins');
    document.getElementById("winbox").innerHTML="Player " + playerTurn + " wins!";
    document.getElementById("resetbutton").setAttribute("style", "display:initial");
    return true;
  }
}

function resetGame(){
location.reload()
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  if(checkForWin()){
    console.log(playerTurn + 'Wins')
    // process.exit();
  };
  playerTurn = (playerTurn === 'X') ? 'O':'X';
  getPrompt();
  }




function getPrompt() {
  document.getElementById("player-prompt").innerHTML="It's Player " + playerTurn + "'s turn.";
  // rl.question('row: ', (row) => {
  //   rl.question('column: ', (column) => {
  //     ticTacToe(row, column);
  //     getPrompt();
  //   });
  // });
}

function idTranslator(id){
  
  switch(id){
    case "1":
      ticTacToe(0, 0);
      break;
    case "2":
      ticTacToe(0, 1);
      break;
      case "3":
      ticTacToe(0, 2);
        break;
      case "4":
      ticTacToe(1, 0);
        break;
      case "5":
      ticTacToe(1, 1);
        break;
      case "6":
      ticTacToe(1, 2);
        break;
      case "7":
      ticTacToe(2, 0);
        break;
      case "8":
      ticTacToe(2, 1);
        break;
      case "9":
      ticTacToe(2, 2);
        break;
    }
  
}


// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();
}