'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

const player1 = hand1.toLowerCase(); 
const player2 = hand2.toLowerCase();

if ( player1 === player2 ) {
  return "It's a tie!";
}

if ( player1 === "rock" ){
  if (player2 === "scissors") {
    return "Hand one wins!";
  } else if ( player2 === "paper" ) {
    return "Hand two wins!";
  }
}
  
if ( player1 === "paper" ){
  if (player2 === "scissors") {
    return "Hand two wins!";
  } else if ( player2 === "rock" ) {
    return "Hand one wins!";
  }
}

if ( player1 === "scissors" ){
  if (player2 === "paper") {
    return "Hand one wins!";
  } else if ( player2 === "rock" ) {
    return "Hand two wins!";
  }
}

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
