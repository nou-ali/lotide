const map = require('../map');
const assert = require('chai').assert;

describe("#findKey", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it("returns ['g', 'c', 't', 'm', 't'] for words, word => word[0]", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("returns [6, 7, 2, 5, 3] for words, word => word.length", () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });

  it("returns [12, 14, 4, 10, 6] for words, word => word.length * 2", () => {
    assert.deepEqual(map(words, word => word.length * 2), [12, 14, 4, 10, 6]);
  });

});

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length);
// const results3 = map(words, word => word.length * 2);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, [6, 7, 2, 5, 3]);
// assertArraysEqual(results3, [12, 14, 4, 10, 6]);