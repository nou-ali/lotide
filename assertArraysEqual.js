const eqArrays = require('./eqArrays');
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅  Arrays are equal`);
  } else {
    console.log(`🛑 Arrays are not equal`);
  }
};

// assertArraysEqual(["My", "name", "is", "Noura"], ["My", "name", "is", "Noura"]);
// assertArraysEqual(["Howdy", "hi", "bye"], ["hey", "hi", "bye"]);


module.exports = assertArraysEqual;    