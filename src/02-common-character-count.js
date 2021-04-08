/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
  // throw new Error('Not implemented');
  let result = 0;
  const string2AsArray = string2.split('');
  // check if string 2 contains char from string 1
  for (let i = 0; i < string1.length; i++) {
    const matchedCharIndex = string2AsArray.indexOf(string1[i]);
    if (matchedCharIndex !== -1) {
      result += 1;
      string2AsArray.splice(matchedCharIndex, 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
