/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // default values
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex = Math.ceil(array.length / 2);
  // while not found split search area by 2
  while (array[middleIndex] !== value) {
    if (middleIndex === 1) return 0;
    if (value > array[middleIndex]) {
      startIndex = middleIndex;
      middleIndex = Math.ceil((startIndex + endIndex) / 2);
    }
    if (value < array[middleIndex]) {
      endIndex = middleIndex;
      middleIndex = Math.ceil((startIndex + endIndex) / 2);
    }
  }
  return middleIndex;
}

module.exports = findIndex;
