const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const LN_OF_TWO = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity === 'string' && /^([1-9]\d*)$/.test(sampleActivity) &&
    Number.parseInt(sampleActivity) < 9000) {
    const N = Number.parseInt(sampleActivity);
    const k = LN_OF_TWO / HALF_LIFE_PERIOD;
    return Math.log(MODERN_ACTIVITY / N) / k;
  }
  return false;
};
