import { compareStrings } from "../strings";

test("compareStrings", () => {
  expect(compareStrings("hello", "hello")).toBe(true);
  expect(compareStrings("  hello", "hello")).toBe(true);
  expect(compareStrings("HELLO", "hello")).toBe(true);
  expect(compareStrings("hello1", "hello")).toBe(false);
});
