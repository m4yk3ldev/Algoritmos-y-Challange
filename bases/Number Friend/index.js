/**
 * @param {number} a
 * @param {number} b
 */
function isNumberFriend(a, b) {
  if (a === 0 || b === 0) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  return sum === b;
}

console.log(isNumberFriend(220, 284));
