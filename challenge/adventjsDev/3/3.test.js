const distributeGifts = require('./3.js')

test('Test #01 - Returns an Number', () => {
  expect(typeof distributeGifts([], [])).toStrictEqual('number')
})

test('Test #02 - distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])', () => {
  expect(
    distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])
  ).toStrictEqual(2)
})

test("Test #03 - distributeGifts(['a', 'b', 'c'], ['d', 'e'])", () => {
  expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toStrictEqual(1)
})

test("Test #04 - it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['midu'])", () => {
  expect(distributeGifts(['videogames', 'console'], ['midu'])).toStrictEqual(0)
})

test("Test #5 distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
  expect(
    distributeGifts(
      ['game', 'videoconsole', 'computer'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ]
    )
  ).toStrictEqual(5)
})

test("Test #6 distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
  expect(
    distributeGifts(
      ['music'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ]
    )
  ).toStrictEqual(26)
})
