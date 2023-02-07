/**
 * @param {number} n
 */
function solution(n) {
  if (n < 1) return false
  const num = String(n)
  if (num.length % 2 !== 0) return false
  const length = num.length / 2
  const num1 = String(n).slice(0, length)
  const num2 = String(n).slice(length, length * 2)
  let sum1 = 0
  let sum2 = 0
  for (let i of num1) {
    sum1 += Number(i)
  }
  for (const i of num2) {
    sum2 += Number(i)
  }

  return sum1 === sum2
}

console.log(solution(1230)) // ->true
console.log(solution(239017)) //-> false
console.log(solution(11)) //-> true
