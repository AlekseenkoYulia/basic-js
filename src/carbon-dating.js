const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || isNaN(parseFloat(sampleActivity)) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY){
    return false;
  }
  var rateConstant = 0.693 / HALF_LIFE_PERIOD;
  var ln = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  return Math.ceil(ln / rateConstant);
};
