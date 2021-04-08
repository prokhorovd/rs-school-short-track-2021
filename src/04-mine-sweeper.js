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
  // let's create a matrix for a result
  const result = [];
  const resultRow = [];
  for (let i = 0; i < columns; i++) resultRow.push(0);
  for (let i = 0; i < rows; i++) result.push(resultRow.slice());
  // console.log(`result matrix is ${result}`);
  // console.log(`result 1st row is ${result[0]}`);

  // let's find some mines and mark them
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === true) {
        // console.log(`mine found at ${i}-${j} position`);
        for (let row = i - 1; row <= i + 1; row++) {
          // console.log(`checking row ${row}`);
          if (row >= 0 && row < rows) {
            // console.log('row is available');
            // console.log("non existing row");
            for (let column = j - 1; column <= j + 1; column++) {
              // console.log(`checking column ${column}`);
              if (column >= 0 && column < columns) {
                if ((row === i && column === j) === false) {
                  // console.log('column is available');
                  result[row][column] += 1;
                  // console.log(`+=1 to [${row}][${column}]`);
                }
              }
            }
          }
        }
      }
    }
  }
  // let's print the result
  // for (let i = 0; i < result.length; i++) {
  //   console.log(result[i]);
  // }
  return result;
}

module.exports = minesweeper;
