const checkPart = require('./8.js')

test('Test #1 - Retorna un boolean', () => {
  expect(typeof checkPart('') === 'boolean').toStrictEqual(true)
})

test('Test #2 - checkPart("uwu") return true', () => {
  expect(checkPart('uwu')).toStrictEqual(true)
})

test('Test #3 - checkPart("miidim") return true', () => {
  expect(checkPart('miidim')).toStrictEqual(true)
})

test('Test #3 - checkPart("midu") return false', () => {
  expect(checkPart('midu')).toStrictEqual(false)
})
