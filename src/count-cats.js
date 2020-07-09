const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  count = 0;
  matrix.forEach(array => {
    array.forEach(element => {
      if (element == "^^"){
        count++;
      }
    })    
  });
  return count;
};