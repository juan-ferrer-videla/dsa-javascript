// @ts-check

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/**
 * @param {number} n
 */
export function pyramid(n) {
  let res = "";
  for (let three = 1, i = 1; i <= n; three += 2, i++) {
    res += `${" ".repeat(n - i)}${"#".repeat(three)}${" ".repeat(n - i)}`;
    if (i !== n) {
      res += "\n";
    }
  }
  return res;
}
