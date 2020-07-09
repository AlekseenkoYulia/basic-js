const CustomError = require("../extensions/custom-error");

const DEFAULT_SEPARATOR = '+';
const DEFAULT_ADDITIONAL_SEPARATOR = '|';
const DEFAULT_REPEAT_TIMES = 1;

module.exports = function repeater(str, options) {
  var strWithAddition = String(str) + Array(options.additionRepeatTimes ? options.additionRepeatTimes : DEFAULT_REPEAT_TIMES)
  .fill(options.hasOwnProperty("addition")  ? String(options.addition) : "").join(options.additionSeparator ? options.additionSeparator : DEFAULT_ADDITIONAL_SEPARATOR);

  return Array(options.repeatTimes ? options.repeatTimes : DEFAULT_REPEAT_TIMES)
  .fill(strWithAddition).join(options.separator ? options.separator : DEFAULT_SEPARATOR);
};
  