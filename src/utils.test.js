const { add, multiply, validateAndParse } = require('./utils');

test('should add two numbers correctly', () => {
  const result = add(2, 3);
  expect(result).toEqual(5);
});

test('should multiply two numbers correctly', () => {
  const result = multiply(2, 3);
  expect(result).toEqual(6);
});

test('should validate and parse string correctly', () => {
  expect(validateAndParse('5')).toEqual(5);
});

test('should validate and parse number correctly', () => {
  expect(validateAndParse(5)).toEqual(5);
});

test('should validate and parse 0 correctly', () => {
  expect(validateAndParse(0)).toEqual(0);
});

test('should validate and parse undefined correctly', () => {
  expect(validateAndParse(undefined)).toEqual(0);
});

test('should validate and parse null correctly', () => {
  expect(validateAndParse(null)).toEqual(0);
});