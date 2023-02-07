// https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true

function modifyArray(nums) {
  return nums.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
}

const numsTest = [1, 2, 3, 4, 5];
console.log(modifyArray(numsTest)); // [3, 4, 9, 8, 15]
