const assertEqual = require('./assertEqual');
const findKeyByValue = function (obj, val) {
  const objectKeys = Object.keys(obj); //  Object.keys function to help you easily search through all the object keys.
  for (const key of objectKeys) { // for...of to loop over the keys returned by Object.keys.
    if (obj[key] === val) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;