const wrapping = require('./1.js',)

test('Test #01 - Returns an Array', () => {
  expect(Array.isArray(wrapping(['cat', 'game', 'socks',],),),).toBe(true,)
},)

test('Test #02 - wrapping(["cat", "game", "socks"])', () => {
  expect(wrapping(['cat', 'game', 'socks',],),).toStrictEqual([
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******',
  ],)
},)

test('Test #03 - wrapping(["midu"])', () => {
  expect(wrapping(['midu',],),).toStrictEqual([
    '******\n*midu*\n******',
  ],)
},)

test('Test #04 - wrapping(["a"])', () => {
  expect(wrapping(['a',],),).toStrictEqual(['***\n*a*\n***',],)
},)

test('Test #05 - Empty Array Should return an Empty Array', () => {
  expect(wrapping([],),).toStrictEqual([],)
},)
