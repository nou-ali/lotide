const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns an empty array", () => {
    assert.deepEqual(assertArraysEqual(middle([1]), []));
  });

  it("returns an empty array", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2]), []));
  });

  it("returns [2]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });

  it("returns [3]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  });

  it("returns [2, 3]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) );
  });

  it("returns [3, 4]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]));
  });

});


// TEST CODE

// assertArraysEqual(middle([1]), []) // => [] // returns an empty array
// assertArraysEqual(middle([1, 2]), []) // => [] // returns an empty array

// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]
