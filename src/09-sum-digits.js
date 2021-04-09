/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  // if one digit - return
  if (num >= 0 && num < 10) {
    return num;
  }
  // else - sum digits and rerun func
  let sum = 0;
  const numAsArray = String(num).split('');
  for (let i = 0; i < numAsArray.length; i++) {
    sum += +numAsArray[i];
  }
  return getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
