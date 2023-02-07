/**
 * @param {number} n
 */
function solution(n) {
  return (n + '').split('').every((a) => Number(a) % 2 == 0)
}

console.log(solution(248622)) //-> true
console.log(solution(642386)) //-> false
console.log(solution(642286)) //-> false
