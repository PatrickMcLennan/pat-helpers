import { compareStrings, stringIncludes } from "../strings";

test("compareStrings", () => {
  expect(compareStrings("hello", "hello")).toBe(true);
  expect(compareStrings("  hello", "hello")).toBe(true);
  expect(compareStrings("HELLO", "hello")).toBe(true);
  expect(compareStrings("hello1", "hello")).toBe(false);
});

test("stringIncludes", () => {
  expect(stringIncludes("he", "hello")).toBe(false);
  expect(stringIncludes("hello", "he")).toBe(true);
});
