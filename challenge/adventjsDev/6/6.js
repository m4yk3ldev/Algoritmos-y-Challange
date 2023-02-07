/**
 * @param {number} size
 */
function createCube(size) {
  let h = []
  let f = []
  for (let i = 1; i <= size; i++) {
    h.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size))
    f.push(' '.repeat(i - 1) + '\\/'.repeat(size - (i - 1)) + '_/'.repeat(size))
  }
  return [...h, ...f].join('\n')
}
module.exports = createCube
