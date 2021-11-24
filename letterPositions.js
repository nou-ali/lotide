const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅  Arrays are equal`);
  } else {
    console.log(`🛑 Arrays are not equal`);
  }
};

// we need to loop through two arrays in order to see if they match
const eqArrays = function(arr1, arr2) {
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
  }

//We'll implement a new function letterPositions which will return all the indices (zero-based positions) 
//...in the string where each character is found.
const letterPositions = function(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if(!result[str[i]]) { //This means if the letter is not in the result object
    result[str[i]] = [i];
    } else {
      result[str[i]].push(i)
    }
  }
  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").o, [2]);

