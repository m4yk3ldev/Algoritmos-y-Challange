const countHours = require('./2.js')

test('Test #01 - Returns an Number', () => {
  expect(typeof countHours(2022, ['04/12'])).toStrictEqual('number')
})

test("Test #02 - countHours(2023, ['01/06', '04/01', '12/25'])", () => {
  expect(countHours(2023, ['01/06', '04/01', '12/25'])).toStrictEqual(4)
})

test("Test #03 - countHours(2022, ['01/06', '04/01', '12/25'])", () => {
  expect(countHours(2022, ['01/06', '04/01', '12/25'])).toStrictEqual(4)
})

test("Test #04 - countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])", () => {
  expect(
    countHours(1985, [
      '01/01',
      '01/06',
      '02/02',
      '02/17',
      '02/28',
      '06/03',
      '12/06',
      '12/25',
    ])
  ).toStrictEqual(10)
})

test("Test #05 - countHours(2000, ['01/01'])", () => {
  expect(countHours(2000, ['01/01'])).toStrictEqual(0)
})
