/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(input) {
  let result = 0;
  // Disassemble number
  const inputArray = String(input).split('');
  // Delete every digit one at a time and check if number can become new maximum
  for (let i = 0; i < inputArray.length; i++) {
    const modifiedInputArray = inputArray.slice();
    modifiedInputArray.splice(i, 1);
    const slicedNum = Number(modifiedInputArray.join(''));
    if (slicedNum > result) {
      result = slicedNum;
    }
  }
  return result;
}

module.exports = deleteDigit;
