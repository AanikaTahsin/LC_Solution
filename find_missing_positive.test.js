const firstMissingPositive = require("./find_missing_positive");

test("missing between {1....10} is 5", () => {
  expect(firstMissingPositive([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
});


test("missing between [1....10] is 10", () => {
    expect(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(10);
  });
  