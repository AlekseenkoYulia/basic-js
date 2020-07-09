const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("( " + value + " )");
    return this; 
  },
  removeLink(position) {
    if (isNaN(position) || typeof this.chain[position - 1] === 'undefined'){
      this.chain = [];
      throw new Error("Error removing link!")
    }
    this.chain.splice(position - 1, 1);
    return this; 
  },
  reverseChain() {
    this.chain.reverse();
    return this; 
  },
  finishChain() {
    var res = String(this.chain.join("~~"));
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;


