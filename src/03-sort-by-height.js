/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

// this func is used for correction of standard sort function
function sortAssist (a, b) {
  return a - b;
}

function sortByHeight(arr) {
  // Let's found every appearance of elementToKeep. Return sorted array if not found.
  const elementToKeep = -1;
  const positionsOfFixedElement = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToKeep) positionsOfFixedElement.push(i);
  }
  if (positionsOfFixedElement.length === 0) return arr.sort(sortAssist);
  // Remove elementToKeep from array, sort array, add elementToKeep to initial positions.
  while (arr.indexOf(elementToKeep) !== -1) {
    arr.splice(arr.indexOf(elementToKeep), 1);
  }
  const result = arr.sort(sortAssist);
  for (let i = 0; i < positionsOfFixedElement.length; i++) {
    result.splice(positionsOfFixedElement[i], 0, -1);
  }
  return result;
}

module.exports = sortByHeight;
