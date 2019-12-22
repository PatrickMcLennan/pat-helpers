import { zip } from "../arrays";

const tester1: object[] = [
  { name: "1", age: 30 },
  { name: "2", age: 20 }
];
const tester2: object[] = [
  { ownsDog: false, skier: false },
  { ownsDog: true, skier: true }
];

test("zip", () => {
  expect(zip(tester1, tester2)).toMatchObject([
    { name: "1", age: 30, ownsDog: false, skier: false },
    { name: "2", age: 20, ownsDog: true, skier: true }
  ]);
});
