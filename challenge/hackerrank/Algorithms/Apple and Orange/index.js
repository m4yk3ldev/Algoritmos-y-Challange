/**
 * @param {number} s
 * @param {number} t
 * @param {number} a
 * @param {number} b
 * @param { number[]} apples
 * @param {number[]} oranges
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countA = 0;
  let countO = 0;

  for (let i = 0; i < apples.length; i++) {
    if (s <= a + apples[i] && a + apples[i] <= t) {
      countA++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (s <= b + oranges[i] && b + oranges[i] <= t) {
      countO++;
    }
  }
  console.log(countA);
  console.log(countO);
  return [countA, countO];
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
