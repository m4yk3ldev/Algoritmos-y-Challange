/**
 * @param {number[]} inputArray
 */
function solution(inputArray) {
  let max = inputArray[0]
  let c = 0
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= max) {
      c += max - inputArray[i] + 1
      inputArray[i] = max + 1
    }
    max = inputArray[i]
  }
  return c
}

console.log(solution([1, 1, 1])) //-> 3
console.log(solution([-1000, 0, -2, 0])) //-> 5
console.log(solution([2, 1, 10, 1])) //-> 12
console.log(solution([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])) //-> 13
