// @ts-check

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/**
 * @param {number} n
 */
export function spiralMatrix(n) {
  let counter = 1;
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const file = [];
    for (let j = 0; j < n; j++) {
      file.push(counter);
      counter++;
    }
    matrix.push(file);
  }
  return matrix;
}
