/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  // create matrix for a result
  const result = [];
  // fill it with zeroes
  const resultRow = [];
  for (let i = 0; i < columns; i++) resultRow.push(0);
  for (let i = 0; i < rows; i++) result.push(resultRow.slice());
  // let's find some mines and mark them
  // iterate through input-matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // if mine is found
      if (matrix[i][j] === true) {
        // we're gonna write to result-matrix to previous, current and following row
        for (let row = i - 1; row <= i + 1; row++) {
          // check if row exists
          if (row >= 0 && row < rows) {
            // we're gonna write to result-matrix to previous, current and following column
            for (let column = j - 1; column <= j + 1; column++) {
              // check if column exist
              if (column >= 0 && column < columns) {
                // make sure cell doesn't contain mine
                if ((row === i && column === j) === false) {
                  // mark that there's mine nearby
                  result[row][column] += 1;
                }
              }
            }
          }
        }
      }
    }
  }
  // return result matrix
  return result;
}

module.exports = minesweeper;
