/**
 * @param {number} n
 * @param {number} firstNumber
 */
function solution(n, firstNumber) {
  return (n / 2 + firstNumber) % n
}
console.log(solution(10, 2)) //->7
solution(10, 7) //-> 2
solution(4, 1) //-> 3
solution(6, 3) //-> 0
