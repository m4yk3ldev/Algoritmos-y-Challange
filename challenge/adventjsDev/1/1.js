/**
 * @param {string[]} gifts
 */
function wrapping(gifts) {
  return gifts.map((item) => {
    const asterisk = '*'.repeat(item.length + 2)
    return asterisk + '\n*' + item + '*\n' + asterisk
  })
}
module.exports = wrapping
