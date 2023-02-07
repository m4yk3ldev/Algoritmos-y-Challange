/**
 * @param {number[]} ar
 */
function simpleArraySum(ar) {
  return ar.reduce((prev, curr) => prev + curr);
}

const arrTest = [1, 2, 3, 4, 10, 11];

console.log(simpleArraySum(arrTest)); // -> 31
