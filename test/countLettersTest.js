const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');
const assert = require('chai').assert;

    describe("#countLetters", () => {
      it("returns 1 for countLetters('lighthouse in the house') for letter l", () => {
        assert.deepEqual(countLetters('lighthouse in the house')['l'], 1);
      });

      it("returns 4 for countLetters('lighthouse in the house') for letter h", () => {
        assert.deepEqual(countLetters('lighthouse in the house')['h'], 4);
      });

      it("returns 2 for countLetters('lighthouse is in daa the house') for letter a", () => {
        assert.deepEqual(countLetters('lighthouse is in daa the house')['a'], 2);
      });


  });

// assertEqual(countLetters("lighthouse in the house")["l"], 1);
// assertEqual(countLetters("lighthouse in the house")["h"], 4);
// assertEqual(countLetters("lighthouse is in daa the house")["a"], 2);
