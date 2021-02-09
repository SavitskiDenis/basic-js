const countHanoiTurns = function (n) {
  if (n <= 0) {
    return 0;
  }
  return 2 * countHanoiTurns(n - 1) + 1;
};

module.exports = function calculateHanoi (disksNumber, turnsSpeed) {
  const turnsNumber = countHanoiTurns(disksNumber);
  return {
    turns: turnsNumber,
    seconds: Math.floor(turnsNumber * 3600 / turnsSpeed)
  };
};
