import { deepClone } from "../objects";

const tester: object = { name: "1", age: 30 };

test("deepClone", () => {
  const tester2: object = deepClone(tester);
  tester2["age"] = 50;
  tester2["name"] = "2";
  expect(tester2).toMatchObject({ name: "2", age: 50 });
  expect(tester).toMatchObject({ name: "1", age: 30 });
});
