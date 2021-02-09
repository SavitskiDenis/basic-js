const generateAdditionString = function (options) {
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator  = options.additionSeparator  || '|';
  let result = '';
  if (options.hasOwnProperty('addition')) {
    let count = 0;
    while (count < additionRepeatTimes) {
      result += options.addition;
      if (count !== additionRepeatTimes - 1) {
        result += additionSeparator;
      }
      count++;
    }
  }
  return result;
};

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator  || '+';
  const additionString = generateAdditionString(options);
  let result = '';
  let count = 0;
  while (count < repeatTimes) {
    result += str + additionString;
    if (count !== repeatTimes - 1) {
      result += separator;
    }
    count++;
  }
  return result;
};