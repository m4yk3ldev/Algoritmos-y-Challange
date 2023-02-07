/**
 * @param {number} deposit
 * @param {number} rate
 * @param {number} threshold
 */
function solution(deposit, rate, threshold) {
  let count = 0
  let total = deposit
  while (total < threshold) {
    const anual = total * (rate / 100)
    total += anual
    count++
  }
  return count
}

console.log(solution(100, 20, 170)) //-> 3
console.log(solution(100, 1, 101)) //-> 1
console.log(solution(1, 100, 64)) //-> 6
console.log(solution(20, 20, 50)) //-> 6
console.log(solution(50, 25, 100)) //-> 4
