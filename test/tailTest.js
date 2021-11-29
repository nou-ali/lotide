const tail = require ('../tail');
const chai = require ('chai');  
const assert = chai.assert;

describe("#tail", () => {
  it("returns 3 length", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns 2 length", () => {
    const output = tail(["Hello", "Lighthouse", "Labs"])
    assert.strictEqual(output.length, 2); 
  });

  it("returns output 0", () => {
    const output = tail(["Lighthouse"])
    assert.strictEqual(output.length, 0); 
  });

  it("returns output 1", () => {
    const output = tail(["Lighthouse", "Labs"])
    assert.strictEqual(output.length, 1); 
  });

  it("returns ['Lighthouse','Labs'] of ['Hello, 'Lighthouse','Labs']", () => {
    const output = tail(["Hello", "Lighthouse", "Labs"])
    assert.deepEqual(output, ['Lighthouse','Labs']); 
  });

});


//TEST CASES
// const output = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(output.length, 3); // ensure we get back three elements
// assertEqual(output.length, 2); // ensure we get back two elements
// assertEqual(output[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(output[1], "Labs"); // ensure second element is "Labs"