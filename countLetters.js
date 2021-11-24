const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
//As per assoignment not counting spaces
const countLetters = function (string) {
  let count = {};
  
    // looping through the items
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

assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse is in daaaaaa the house")["a"], 2);