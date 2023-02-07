/**
 * @param {number[]} inputArray
 */
function solution(inputArray) {
  let rest = 0
  for (let i = 0; i < inputArray.length; i++) {
    let temp = 0
    temp = Math.abs(inputArray[i] - inputArray[i + 1])
    if (rest < temp) {
      console.log(temp)
      rest = temp
    }
  }
  return rest
}

console.log(solution([2, 4, 1, 0])) // -> 3
console.log(solution([1, 1, 1, 1])) // -> 0
console.log(solution([-1, 4, 10, 3, -2])) // -> 7
console.log(solution([10, 11, 13])) // -> 2
