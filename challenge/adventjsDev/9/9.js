/**
 * @param {number[]} leds
 */
function countTime(leds) {
  let list = leds.join('').split('1')
  list[0] += list.pop()
  return Math.max(...list.map((x) => x.length)) * 7
}

module.exports = countTime
