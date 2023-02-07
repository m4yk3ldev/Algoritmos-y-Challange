/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 */
function compareTriplets(a, b) {
  let aCount = 0;
  let bCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aCount++;
    } else if (a[i] < b[i]) {
      bCount++;
    }
  }
  return [aCount, bCount];
}

compareTriplets([17, 28, 30], [99, 16, 8]);
compareTriplets([5, 6, 7], [3, 6, 10]);
