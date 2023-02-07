/**
 * @param {number[]} a
 */
function solution(a) {
  const aTemp = [...a]
    .filter((i) => i > 0)
    .sort((a, b) => {
      return a - b
    })
  let count = 0
  for (const i in a) {
    if (a[i] !== -1) {
      a[i] = aTemp[count]
      count++
    }
  }

  return a
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])) //-> [-1, 150, 160, 170, -1, -1, 180, 190]
