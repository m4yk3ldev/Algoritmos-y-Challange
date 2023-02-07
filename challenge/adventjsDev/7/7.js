/**
 * @param {string[]} a1
 * @param {string[]} a2
 * @param {string[]} a3
 */
function getGiftsToRefill(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    (g) => a1.includes(g) + a2.includes(g) + a3.includes(g) === 1
  )
}

module.exports = getGiftsToRefill
