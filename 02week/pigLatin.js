'use wordict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function pigLatin(word){
  function checkVowels(element){
    let vowels = ['a', 'e', 'i','o','u']
    let passed = false; 
    for(let v of vowels){
      v === element ? passed = true : null;
    }
    return passed; 
  }

  let vowelIndex = word.split('').findIndex(checkVowels) // returns the index of the first vowel

  let pigged = word;

  // if first letter is a vowel 
  vowelIndex === 0 ? pigged = word + 'way' :
  // if the first two letters are consonants
  vowelIndex > 1 || vowelIndex == -1 ? pigged = word.slice(2) + word.slice(0, 2) + 'ay' : 
  // if the first letter is a consonant and the second letter is a vowel
  vowelIndex === 1 ? pigged = word.slice(1) + word[0] + 'ay' : null
  

  return pigged; 

}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}
// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
