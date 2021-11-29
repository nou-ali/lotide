const assertEqual = require('./assertEqual');

const findKey = function (obj, callback) {
  for (let key in obj) { // looping through object
    if (callback(obj[key])) { // checking if condition is met
      return key; // return when it meets the conditional
    }
  }
};

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2),"noma");

module.exports = findKey;