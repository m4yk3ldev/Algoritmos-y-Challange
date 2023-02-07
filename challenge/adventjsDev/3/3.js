/**
 * @param {string[]} packOfGifts
 * @param {string[]} reindeers
 */

function distributeGifts(packOfGifts, reindeers) {
  return Math.trunc(
    (reindeers.join('').length * 2) / packOfGifts.join('').length
  )
}

module.exports = distributeGifts
