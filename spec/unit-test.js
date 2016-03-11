'use strict'

var getNumberArray = require('../main/main.js');
var getLCDArray = require('../main/main.js');
var getLCDString = require('../main/main.js');

describe("when input a number then get array type numberString", function() {

  it("when get a number then return a numberArray", function() {
    let input = 910;
    let result = ["._.|_|..|", ".....|..|", "._.|.||_|"];

    expect(result).toEqual(getNumberArray.getNumberArray(input));
  });
});

describe("when get a numberArray then get LCDArray", function() {

  it("", function() {
    let input = ["._.|_|..|", ".....|..|", "._.|.||_|"];
    let result = ["._. ... ._.\n", "|_| ..| |.|\n", "..| ..| |_|\n"]

    expect(result).toEqual(getLCDArray.getLCDArray(input));
  });
});

describe("when get a LCDArray then get LCDString", function() {
  it('should print correct LCDString', function() {

    spyOn(console, 'log');

    let input = ["._. ... ._.\n", "|_| ..| |.|\n", "..| ..| |_|\n"];
    getLCDString.getLCDString(input);

    let result = "._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n"

    expect(console.log).toHaveBeenCalledWith(result);
  });
});
