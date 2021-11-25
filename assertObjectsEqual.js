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


  // FUNCTION IMPLEMENTATION
  const assertObjectsEqual = function (actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) { // same as actual === expected
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else { // if objects are different!
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };


  //const obj1 =  {
    //key1: ["My", "name", "is", "Noura"]
    //key2: ["My", "name", "is", "Noura"]

  //}

  //const obj2 =  {
    //key1: ["Howdy", "hi", "bye"]
    //key2: ["hey", "hi", "bye"]

  //}

  //assertObjectsEqual(obj1, obj2); 

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertObjectsEqual(ab, ba); // => true
  
  const abc = { a: "1", b: "2", c: "3"};
  assertObjectsEqual(ab, abc); // => false
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertObjectsEqual(cd, dc); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertObjectsEqual(cd, cd2); // => false
  
  


