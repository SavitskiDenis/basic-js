module.exports = {
  chains: [],
  getLength () {
    return this.chains.length;
  },
  addLink (value) {
    this.chains.push(value);
    return this;
  },
  removeLink (position) {
    if (typeof position === 'number' && position - 1 >= 0 && position - 1 < this.chains.length) {
      this.chains.splice(position - 1, 1);
      return this;
    }
    this.chains = [];
    throw new Error();
  },
  reverseChain () {
    this.chains.reverse();
    return this;
  },
  finishChain () {
    let result = '';
    this.chains.forEach((el, index) => {
      result += `( ${el} )`;
      if (index < this.chains.length - 1) {
        result += '~~';
      }
    });
    this.chains = [];
    return result;
  }
};
