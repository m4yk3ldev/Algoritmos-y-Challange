/**
 * @param {string} part
 */
function checkPart(part) {
  return [...part].some((a, i) => {
    const str = part.slice(0, i) + part.slice(i + 1)
    return str === str.split('').reverse().join('')
  })
}

module.exports = checkPart
