module.exports = function getSeason(date) {
  if (date) {
    if (date.toString() !== new Date(date.getTime()).toString()) throw new Error();
    const month = date.getMonth(),
      res = month === 0 || month === 1 || month === 11 ? 'winter'
        : month >= 2 && month <= 4 ? 'spring'
        : month >= 5 && month <= 7 ? 'summer'
        : month >= 8 && month <= 10 ? 'fall' : null;
    return res;
  }
  return 'Unable to determine the time of year!';
};
