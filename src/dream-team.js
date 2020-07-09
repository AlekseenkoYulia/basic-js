const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  var letters = [];
  members.forEach(member => {
    if (typeof member == "string"){
      letters.push(member.trim().slice(0,1).toUpperCase())
    }
  });
  return letters.sort().join("");
};

