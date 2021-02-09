module.exports = function createDreamTeam(array) {
  if (Array.isArray(array)) {
    const symbols = [];
    array.forEach(el => {
      if (typeof el === 'string' && el !== null) {
        symbols.push(el.trim()[0].toUpperCase());
      }
    });
    symbols.sort();
    return symbols.join('');
  }
  return false;
};
