const getMaxGifts = require('./5')

test('Test #01 - Returns an Boolean', () => {
  expect(typeof getMaxGifts([], 0, 0)).toStrictEqual('number')
})

test('Test #02 - getMaxGifts([12, 3, 11, 5, 7], 20, 3)', () => {
  expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toStrictEqual(20)
})

test('Test #03 - getMaxGifts([50], 15, 1)', () => {
  expect(getMaxGifts([50], 15, 1)).toStrictEqual(0)
})

test('Test #04 - getMaxGifts([50], 100, 1)', () => {
  expect(getMaxGifts([50], 100, 1)).toStrictEqual(50)
})

test('Test #05 - getMaxGifts([50, 70], 100, 1)', () => {
  expect(getMaxGifts([50, 70], 100, 1)).toStrictEqual(70)
})
test('Test #06 - getMaxGifts([50, 70, 30], 100, 2)', () => {
  expect(getMaxGifts([50, 70, 30], 100, 2)).toStrictEqual(100)
})
test('Test #07 - getMaxGifts([50, 70, 30], 100, 3)', () => {
  expect(getMaxGifts([50, 70, 30], 100, 3)).toStrictEqual(100)
})
test('Test #08 - getMaxGifts([50, 70, 30], 100, 4)', () => {
  expect(getMaxGifts([50, 70, 30], 100, 4)).toStrictEqual(100)
})
