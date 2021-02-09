const CAT_STRING = '^^';

module.exports = function countCats(matrix) {
  let result = 0;
  if (Array.isArray(matrix)) {
    matrix.forEach(el => {
      el.forEach(subEl => {
        result += subEl === CAT_STRING ? 1 : 0;
      });
    });
  }
  return result;
};
