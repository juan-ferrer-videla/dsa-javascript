// @ts-check

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * @param {number} n
 */
export function steps(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    res += `${"#".repeat(i)}${" ".repeat(n - i)}`;
    if (i !== n) {
      res += "\n";
    }
  }
  return res;
}
