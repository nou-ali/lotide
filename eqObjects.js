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

  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // if objects are equal length 
    for (let key of Object.keys(object1) ) { // looping through object.keys
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //Array.isArray() method determines whether the passed value is an Array. syntax is Array.isArray(value)
        if (!eqArrays(object1[key], object2[key])) {  // not equal return false
          return false;
        }
      }
    }
    return true
  }
  return false
  
  };


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3"};
console.log(assertEqual(eqObjects(ab, abc), false)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false )); // => false










