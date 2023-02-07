/**
 * @param {number[][]} arr
 */
function diagonalDifference(arr) {
  let [d1, d2, length] = [0, 0, arr.length];
  for (let i = 0; i < length; i++) {
    d1 += arr[i][i];
    d2 += arr[length - 1 - i][i];
  }
  return Math.abs(d1 - d2);
}

let arrTestdiagonalDifference = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arrTestdiagonalDifference));
