var getNumberArray = require('../main/main.js');
var getLCDArray = require('../main/main.js');
var getLCDString = require('../main/main.js');

describe("when input a number then get array type numberString", function() {

  it("when get a number then return a numberArray", function() {
    var input = 910;
    var result = ["._.|_|..|", ".....|..|", "._.|.||_|"];

    expect(result).toEqual(getNumberArray.getNumberArray(input));
  });
});

describe("when get a numberArray then get LCDArray", function() {

  it("", function() {
    var input = ["._.|_|..|", ".....|..|", "._.|.||_|"];
    var result = ["._. ... ._.\n", "|_| ..| |.|\n", "..| ..| |_|\n"]

    expect(result).toEqual(getLCDArray.getLCDArray(input));
  });
});

describe("when get a LCDArray then get LCDString", function() {
  it('should print correct LCDString', function() {

    spyOn(console, 'log');

    var input = ["._. ... ._.\n", "|_| ..| |.|\n", "..| ..| |_|\n"];
    getLCDString.getLCDString(input);

    var result = "._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n"

    expect(console.log).toHaveBeenCalledWith(result);
  });
});