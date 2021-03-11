const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1, 
    separator = '+', 
    addition, 
    additionRepeatTimes = 1, 
    additionSeparator = '|'
  } = options;

  if (addition !== undefined) {
    addition = String(addition);
  }

  let additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let strArr = new Array(repeatTimes).fill(str + additionStr);

  return strArr.join(separator);
};
  