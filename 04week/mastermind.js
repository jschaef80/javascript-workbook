'use strict';

const assert = require('assert');
const readline = require('readline');
const colors = require('colors');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function reset(){
  board = [];
  solution = '';
  generateSolution();
}

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
  
function generateHint(guess) {
  // your code here
  let solutionArray = solution.split("");
  let guessArray = guess.split("");
  let correctLetterLocations = 0;
  let correctLetters = 0;

  for (let i = 0; i < solutionArray.length; i++){
    if (solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

  for(let i = 0; i < solutionArray.length; i++) {
    let targetIndex = solutionArray.indexOf(guessArray[i]);
    if(targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }
return `${(colors.red(correctLetterLocations))}-${(colors.white(correctLetters))}`;
}

function mastermind(guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
  if (guess === solution){
    console.log(colors.bold.green(`Winner! You guessed it in ${board.length+1} turns!`));
    console.log(colors.blue('Starting new game.'));
    reset();
  }
  else if(board.length<9) {
    console.log(`Guess again! You have ${9-board.length} turn(s) left.`);
    let hint = generateHint(guess);
    board.push( `${guess} ${hint}`); 
  }
  else if(board.length == 9) {
    console.log(colors.red(`You ran out of turns! The solution was ${solution}.`));
    console.log(colors.blue('Starting new game.'));
    reset();
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard(); 
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
