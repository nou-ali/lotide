const assertEqual = require('./assertEqual');

const countLetters = function (string) {
  let count = {};
  for (let letter of string) {
    if(letter !== " ") {
      if (count[letter]) {
        count[letter] += 1
      } else {
        count[letter] = 1
      }
    }
  }
  return count;
}

// assertEqual(countLetters("lighthouse in the house")["l"], 1);
// assertEqual(countLetters("lighthouse in the house")["h"], 4);
// assertEqual(countLetters("lighthouse is in daa the house")["a"], 2);

module.exports = countLetters;
