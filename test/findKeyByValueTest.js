const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  it("returns The Wire" , () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns That '70s Show" , () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns The Expanse" , () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
});


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");