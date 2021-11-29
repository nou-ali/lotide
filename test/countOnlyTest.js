const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

    describe("#countOnly", () => {
    it("returns 1 for Jason", () => {
      assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })['Jason'], 1);
    });

    it("returns undefined for Karima", () => {
      assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })['Karima'], undefined);
    });

    it("returns 2 for Fang", () => {
      assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })['Fang'], 2);
    });


});

//const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true});
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined); 
// assertEqual(result1["Fang"], 2);