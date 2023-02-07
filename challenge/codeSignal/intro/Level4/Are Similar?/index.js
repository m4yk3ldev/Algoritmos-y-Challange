/**
 * @param {number[]} a
 * @param {number[]} b
 */
function solution(a, b) {
  const ad = a.filter((v, i) => v != b[i])
  const bd = b.filter((v, i) => v != a[i])
  return (
    ad.length == 0 || (ad.length == 2 && ad.join('') === bd.reverse().join(''))
  )
}

console.log(solution([1, 2, 3], [1, 2, 3])) //-> true
console.log(solution([1, 2, 3], [2, 1, 3])) //-> true
console.log(solution([1, 2, 2], [2, 1, 1])) //-> false
console.log(
  solution(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
  )
) //-> false
