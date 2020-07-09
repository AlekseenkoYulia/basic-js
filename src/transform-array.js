const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("Not an Array!")
  }

  let discardNext = false;
  let doubleNext = false;

  const reducer = (previousValue, currentValue, index, array) => {
    switch(currentValue){
      case "--discard-next": {
        discardNext = true;
        break;
      }
      case "--double-next": {
        doubleNext = true;

        break;
      }
      case "--discard-prev": {
        if (index > 0){
          previousValue.pop();
        }
        break;
      }
      case "--double-prev": {
        if (index > 0 && previousValue[previousValue.length - 1] != "discardedElem"){
          previousValue.push(previousValue[previousValue.length - 1]);
        }

        break;
      }
      default: {
        if (discardNext){
          discardNext = false;
          previousValue.push('discardedElem');
        } else if (doubleNext){
          previousValue.push(currentValue);
          previousValue.push(currentValue);
          doubleNext = false;
        } else {
          previousValue.push(currentValue);
        }
      }
    }
    return previousValue;
  };

  return arr.reduce(reducer, []).filter(elem => elem != "discardedElem");
};
