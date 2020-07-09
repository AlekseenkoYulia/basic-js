const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var maxDepth = 0;
    arr.forEach(element => {
      if(Array.isArray(element)){
        var innerDepth = this.calculateDepth(element);
        if (innerDepth > maxDepth){
          maxDepth = innerDepth;
        }
      }
    });
    return maxDepth + 1;
  }
};