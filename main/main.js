'use strict'
var loadLCDArray = require('../spec/fixture.js');

function printResult(number) {
  let numberArray = getNumberArray(number);
  let LCDArray = getLCDArray(numberArray);
  let LCDString = getLCDString(LCDArray);

  console.log(LCDString);
}
function getNumberArray(number) {
  let numberString = number.toString();
  let numberArray = numberString.split("");
  let LCDArray = loadLCDArray();

  let result = [];

  for(let i = 0; i < numberArray.length; i++) {
    var index = parseInt(numberArray[i]);
    result.push(LCDArray[index]);
  }

  return result;
}

function getLCDArray(numberString) {
  let LCDArray = [];

  for(let i = 0; i < numberString.length; i++) {
    let string = '';
    for(let index = 0; index < numberString.length; index++) {
      string += numberString[index].substr(i*3,3);
      string += (index === numberString.length-1) ? '\n' : ' ';
    }
    LCDArray.push(string);
  }

  return LCDArray;
}

function getLCDString(LCDArray) {
  let LCDString = '';
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
