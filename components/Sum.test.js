import { sumOfCounts } from "../pages/index.js";

test("adding values returns sum of all values", () => {
  expect(sumOfCounts(4, 25, 17, 8, 12)).toBe(66);
  expext(sumOfCounts(4, 25, 17, 8)).toBe(54);
  expext(sumOfCounts(4)).toBe(4);
  expext(sumOfCounts()).toBe(0);
});
