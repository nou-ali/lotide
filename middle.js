//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');

//We need to return the middle numbers within an array
const middle = function (array) {
  let theMiddle = [];
  if (array.length <= 2) {
    return theMiddle; // [];
  } else {

    let middleIndex = Math.ceil(array.length / 2) - 1;
    // we have to round down since JS is zero based index 
    if (array.length % 2 !== 0) { //checking if it's odd length
      theMiddle.push(array[middleIndex]);
    } else { //even length
      theMiddle.push(array[middleIndex]);
      theMiddle.push(array[middleIndex + 1]);
    }
    return theMiddle;
  }

}

// TEST CODE

// assertArraysEqual(middle([1]), []) // => [] // returns an empty array
// assertArraysEqual(middle([1, 2]), []) // => [] // returns an empty array

// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]

module.exports = middle;