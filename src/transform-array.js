module.exports = function transform(array) {
  if (Array.isArray(array)) {
    const result = [];
    let lastNextDiscardIndex = -1
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '--discard-next') {
        lastNextDiscardIndex = i + 1
        i++;
      } else if (array[i] === '--double-next') {
        if (i < array.length - 1) {
          result.push(array[i + 1]);
        }
      } else if (array[i] === '--discard-prev') {
        if (result.length > 0 && (lastNextDiscardIndex === -1 || lastNextDiscardIndex !== i - 1)) {
          result.splice(result.length - 1, 1);
        }
      } else if (array[i] === '--double-prev') {
        if (result.length > 0 && (lastNextDiscardIndex === -1 || lastNextDiscardIndex !== i - 1)) {
          result.push(result[result.length - 1]);
        }
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
  throw new Error();
};
