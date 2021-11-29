//assertEqual function
const assertEqual = require('./assertEqual');
const countOnly = function(allItems, itemsToCount) { //declaring function
  //The function should report back how many instances of each string were found in the allItems array of strings.
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1   //starting if statement checks whether a given item is within the results list. If not, it initializes it at 1. If item-key is already in the results you dont need to add it again, you are just increasing the count for that item by 1.
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

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined); 
// assertEqual(result1["Fang"], 2);


module.exports = countOnly;


