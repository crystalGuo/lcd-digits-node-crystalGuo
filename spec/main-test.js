'use strict'

var printResult = require('../main/main.js');

describe("when get number then output LCDString", function() {
  it('should print correct LCDString', function() {

    spyOn(console, 'log');

    let input = 910;
    printResult.printResult(input);

    let result = "._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n"

    expect(console.log).toHaveBeenCalledWith(result);
  });

});
