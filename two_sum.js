module.exports = (nums, target) => {
  const isOccured = new Map();
  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    console.log(val);
    if (isOccured.has(val)) {
      return [isOccured.get(val), i];
    }
    isOccured.set(nums[i], i);
  }
};
