/**
 * @param {string[]} picture
 */
function solution(picture) {
  let size = Math.max(...picture.map((a) => a.length + 2))
  return [
    '*'.repeat(size),
    ...picture.map((a) => `*${a}`.padEnd(size, '*')),
    '*'.repeat(size),
  ]
}

console.log(solution(['abc', 'ded'])) //-> ["*****","*abc*","*ded*","*****"]
console.log(solution(['a'])) //-> ["***","*a*","***"]
console.log(solution(['aa', '**', 'zz'])) //-> ["****","*aa*", "****", "*zz*", "****"]
