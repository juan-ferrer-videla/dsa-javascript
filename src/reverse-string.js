// @ts-check

// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

/**
 * @param {string} str
 * @returns {string}
 */
export function reverseString(str) {
  let reverseString = "";
  for (const char of str) {
    reverseString = char + reverseString;
  }
  return reverseString;
}
