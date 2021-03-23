const test1 = require('./test1')

test('1 + 2 should return 3', () => {
  
  expect(test1.numberPlus(1,2)).toBe(3)
})
