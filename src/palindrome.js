// @ts-check

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

/**
 * @param {string} str
 */
export function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
