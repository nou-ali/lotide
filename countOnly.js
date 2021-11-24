//assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


//Before you get started to make your Lego car, you need to sift through adn make sure that all the pieces that you need to build your car are in the pile.



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) { //declaring function
  //The function should report back how many instances of each string were found in the allItems array of strings.
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
  }


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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined); 
assertEqual(result1["Fang"], 2);






