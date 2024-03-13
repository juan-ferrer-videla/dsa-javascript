import { expect, test, describe } from "vitest";
import { reverseString } from "../src/reverse-string";
import { reverseInt } from "../src/reverse-int";
import { palindrome } from "../src/palindrome";
import { maxChar } from "../src/max-char";
import { chunk } from "../src/chunk";
import { capitalize } from "../src/capitalize";
import { areAnagram } from "../src/anagram";
import { vowelCounter } from "../src/vowels";
import { fizzbuzz } from "../src/fizzbuzz";
import { steps } from "../src/steps";
import { pyramid } from "../src/pyramid";
import { spiralMatrix } from "../src/spiral-matrix";

describe("DSA algorithms", () => {
  test("reverse string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("reverse number", () => {
    expect(reverseInt(321)).toBe(123);
  });
  test("palindrome", () => {
    expect(palindrome("neuquen")).toBe(true);
    expect(palindrome("neuque")).toBe(false);
  });
  test("max char", () => {
    expect(maxChar("hellolo111111")).toBe("1");
  });
  test("chunk array", () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
  test("capitalize", () => {
    expect(capitalize("hello world")).toBe("Hello World");
  });
  test("anagram", () => {
    expect(areAnagram("Listen", "Silent")).toBe(true);
    expect(areAnagram("Astronomer", "Moon starer")).toBe(true);
  });
  test("vowel counter", () => {
    expect(vowelCounter("Listen")).toBe(2);
    expect(vowelCounter("Astronomer")).toBe(4);
  });
  test("fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);
  });
  test("steps", () => {
    expect(steps(3)).toBe("#  \n## \n###");
  });
  test("pyramid", () => {
    expect(pyramid(3)).toBe("  #  \n ### \n#####");
  });
  test("spiral matrix", () => {
    expect(spiralMatrix(3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
