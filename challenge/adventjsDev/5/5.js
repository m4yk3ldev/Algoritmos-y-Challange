function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let c = []
  c.push([], [giftsCities.shift()])
  giftsCities.map((x) => {
    const newList = c.map((i) => {
      let tmpC = [...i]
      if (tmpC.length < maxCities) {
        tmpC.push(x)
      }
      return tmpC
    })
    c = c.concat(newList)
  })
  c.shift()
  return Math.max(
    ...c.map((x) => {
      const sum = x.reduce((len, i) => len + i)
      return sum > maxGifts ? 0 : sum
    })
  )
}
module.exports = getMaxGifts
