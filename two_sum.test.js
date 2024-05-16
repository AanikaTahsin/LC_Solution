const twoSum = require("./two_sum");

test("two sum of 9", () => {
  expect(twoSum([2,7,11,15], 9)).toStrictEqual([0, 1]);
});

test("two sum of 6", () => {
    expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
  });

  test("two sum of 6", () => {
    expect(twoSum([3,3], 6)).toStrictEqual([0,1]);
  });

  test("two sum of 0", () => {
    expect(twoSum([-3,4,3,90], 0)).toStrictEqual([0,2]);
  });