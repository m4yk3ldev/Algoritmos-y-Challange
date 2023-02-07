/**
 * @param {number[]} nums
 */
function getSecondLargest(nums) {
  nums = [...new Set(nums)].sort((a, b) => a - b);
  if (nums.length === 1 || nums.length === 2) return nums[0];
  return nums.length > 2 ? nums[nums.length - 2] : nums[1];
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // -> 9
