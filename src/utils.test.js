const { add, multiply } = require('./utils');

test('should add two numbers correctly', () => {
  const result = add(2, 3);
  expect(result).toEqual(5);
});

test('should multiply two numbers correctly', () => {
  const result = multiply(2, 3);
  expect(result).toEqual(6);
});
