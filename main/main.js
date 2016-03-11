var loadLCDArray = require('../spec/fixture.js');
function printResult(number) {
  var numberArray = getNumberArray(number);
  var LCDArray = getLCDArray(numberArray);
  var LCDString = getLCDString(LCDArray);

  console.log(LCDString);
}
function getNumberArray(number) {
  var numberString = number.toString();
  var numberArray = numberString.split("");
  var LCDArray = loadLCDArray();

  var result = [];

  for(var i = 0; i < numberArray.length; i++) {
    var index = parseInt(numberArray[i]);
    result.push(LCDArray[index]);
  }

  return result;
}

function getLCDArray(numberString) {
  var LCDArray = [];

  for(var i = 0; i < numberString.length; i++) {
    var string = '';
    for(var index = 0; index < numberString.length; index++) {
      string += numberString[index].substr(i*3,3);
      string += (index === numberString.length-1) ? '\n' : ' ';
    }
    LCDArray.push(string);
  }

  return LCDArray;
}

function getLCDString(LCDArray) {
  var LCDString = '';
  LCDArray.forEach(function(element) {
    LCDString += element;
  });

  console.log(LCDString);

  return LCDString;
}

exports.printResult = printResult;
exports.getLCDArray = getLCDArray;
exports.getNumberArray = getNumberArray;
exports.getLCDString = getLCDString;