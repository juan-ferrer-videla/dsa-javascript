// @ts-check

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * @param {string} str
 */
export function maxChar(str) {
  const charObj = {};
  let maxCount = 0;
  let maxChar = "";

  for (const char of str) {
    charObj[char] = (charObj[char] ?? 0) + 1;

    if (charObj[char] > maxCount) {
      maxCount = charObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}
