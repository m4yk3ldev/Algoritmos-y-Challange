// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
/**
 * @param {number[]} ar
 */
function aVeryBigSum(ar) {
  return ar.reduce((prev, current) => prev + current);
}

const testArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(testArray));
