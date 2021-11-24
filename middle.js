
//eqArray function
const eqArrays = function (arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}


const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅  Arrays are equal`);
  } else {
    console.log(`🛑 Arrays are not equal`);
  }
};

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

middle([1]) // => [] // returns an empty array
middle([1, 2]) // => [] // returns an empty array

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]