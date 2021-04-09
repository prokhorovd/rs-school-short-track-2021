/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return str;
  let result = '';
  const stringAsArray = str.split('');
  let currentChar = stringAsArray[0];
  let charCoeff = 1;
  // iterate over chars, compare every one to previous.
  for (let i = 1; i < stringAsArray.length; i++) {
    if (stringAsArray[i] === currentChar) {
      charCoeff += 1;
    } else {
      result += String(charCoeff + currentChar);
      currentChar = stringAsArray[i];
      charCoeff = 1;
    }
    if (i === stringAsArray.length - 1) {
      result += String(charCoeff + currentChar);
    }
  }
  // remove ones from result
  let output = '';
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== '1') output += result[i];
  }
  return output;
}
//
// let str = 'aabbbc';
// console.log(encodeLine(str))

module.exports = encodeLine;
