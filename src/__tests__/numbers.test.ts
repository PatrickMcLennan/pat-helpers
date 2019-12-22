import { square } from "../numbers";

test("square", () => {
  expect(square(2)).toBe(4);
  expect(square(10)).toBe(100);
  expect(square(5)).not.toBe(26);
});
