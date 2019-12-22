import { evenNumbers, oddNumbers, square } from "../numbers";

test("evenNumbers", () => {
  expect(evenNumbers(10)).toStrictEqual([0, 2, 4, 6, 8, 10]);
});

test("oddNumbers", () => {
  expect(oddNumbers(10)).toStrictEqual([1, 3, 5, 7, 9]);
});

test("square", () => {
  expect(square(2)).toBe(4);
  expect(square(10)).toBe(100);
  expect(square(5)).not.toBe(26);
});
