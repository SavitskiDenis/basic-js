module.exports = class DepthCalculator {
  calculateDepth (arr) {
    let count = 1;
    let max = 0;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        max = Math.max(this.calculateDepth(el), max);
      }
    });
    return count + max;
  };
};