import { zip } from "../arrays";

const tester1: object[] = [{ name1: "1", age1: 30 }];
const tester2: object[] = [{ name2: "2", age2: 30 }];

test("zip", () => {
  expect(zip(tester1, tester2)).toMatchObject([
    { name1: "1", age1: 30, name2: "2", age2: 30 }
  ]);
});
