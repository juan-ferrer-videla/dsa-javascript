// @ts-check

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

/**
 * @param {string} str
 */
export function capitalize(str) {
  return str
    .split(" ")
    .map((str) => `${str[0].toLocaleUpperCase()}${str.slice(1)}`)
    .join(" ");
}
