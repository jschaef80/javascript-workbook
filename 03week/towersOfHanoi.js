'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function isLegal(startArray, endArray) {
  let startLength = startArray.length-1;
  let endLength = endArray.length-1;

  if (endArray[endLength] == undefined){
    return true;
  } else if (startArray[startLength] < endArray[endLength]) {
    return true;
  } else {
    return false;
  }
  
}

function movePiece(startStack, endStack) {
    
    let startLength = stacks[startStack].length;
    let endLength = stacks[endStack].length;
    let piece = stacks[startStack][startLength-1];
    
  stacks[startStack].pop(piece)
  stacks[endStack].push(piece)

}

function resetGame() {
stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
  
}

function checkForWin() {
  if (stacks.c[0] == 4 && stacks.c[1] == 3 && stacks.c[2] == 2 && stacks.c[3] == 1){
    console.log("winner"); 
    resetGame();
  }
}

function towersOfHanoi(startStack, endStack) {

  //Legality check
  let legal = isLegal(stacks[startStack], stacks[endStack])
  if(legal){
    movePiece(startStack, endStack)
  }

  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
