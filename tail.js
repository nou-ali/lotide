//const assertEqual = require('./assertEqual');

let tail = function (array) {
  return array.slice(1);
};

//TEST CASES
// const output = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(output.length, 3); // ensure we get back three elements
// assertEqual(output.length, 2); // ensure we get back two elements
// assertEqual(output[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(output[1], "Labs"); // ensure second element is "Labs"

module.exports = tail;

