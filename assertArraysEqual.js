const eqArrays = require('../eqArrays');
//copied eqArray function:
// we need to loop through two arrays in order to see if they match
// const eqArrays = function (arr1, arr2) {
//   let result = true;
// if two arrays are not the same length the assertion fails
//   if (arr1.length !== arr2.length) {
//     result = false;
//   }

//   if the two array of the same length
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       result = false;
//     }
//   }
//   return result;
// }


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