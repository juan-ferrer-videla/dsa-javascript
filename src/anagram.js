// @ts-check

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * @param {string} str1
 * @param {string} str2
 */
export function areAnagram(str1, str2) {
  const cleanString1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanString2 = str2.replace(/\s/g, "").toLowerCase();

  if (cleanString1.length !== cleanString2.length) return false;

  const charObj = {};

  for (const char of cleanString1) {
    charObj[char] = (charObj[char] ?? 0) + 1;
  }

  for (const char of cleanString2) {
    if (charObj[char] === undefined || charObj[char] <= 0) {
      return false;
    }
    charObj[char]--;
  }

  return true;
}
