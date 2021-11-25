//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//Our map function will take in two arguments:
//An array to map
//A callback function
//The map function will return a new array based on the results of the callback function.

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//copied eqArray function:
// we need to loop through two arrays in order to see if they match
const eqArrays = function (arr1, arr2) {
  let result = true;
  //if two arrays are not the same length the assertion fails
  if (arr1.length !== arr2.length) {
    result = false;
  }

  // if the two array of the same length
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅  Arrays are equal`);
  } else {
    console.log(`🛑 Arrays are not equal`);
  }
};

const words = ["ground", "control", "to", "major", "tom"]; 
const results1 = map(words, word => word[0]);
//const results1 = map(words, word => word[1]);
//const results1 = map(words, word => word[2]);

assertArraysEqual(map(words, word => word.length), [6,7,2,5,3])
//assertArraysEqual(map(words, word => word.length), [6,2,2,3,3])
//assertArraysEqual(map(words, word => word.length), [6,2,5,7,3])