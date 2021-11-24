
//eqArray function
const eqArrays = function(arr1, arr2) {
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

//assertArraysEqual(["My", "name", "is", "Noura"], ["My", "name", "is", "Noura"]);
//assertArraysEqual(["Howdy", "hi", "bye"], ["hey", "hi", "bye"]);


//Should take in an original array and another array to remove items of the source array

const without = function (origin, itemsRemove) {
let resultArr = [];
for (let i = 0; i < origin.length; i++) {
  let removeElem = false;
  for (let j = 0; j < itemsRemove.length; j++) {
    if (origin[i] === itemsRemove[j]) {
      removeElem = true;
    }
  }
if (removeElem === false) {
  resultArr.push(origin[i]);
}
}
return resultArr
}

//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

assertArrayEqual(without([1, 2, 3], [1]), [2, 3] )
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"] )

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);

