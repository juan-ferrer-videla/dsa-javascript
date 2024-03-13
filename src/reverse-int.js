// @ts-check

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 * @param {number} num
 * @returns {number}
 */
export function reverseInt(num) {
  let str = num.toString();
  let reverseString = "";
  for (const char of str) {
    reverseString = char + reverseString;
  }
  return Number(reverseString);
}
