const { add, multiply, validateAndParse, calculate } = require('./utils');
const puppeteer = require('puppeteer');

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

test('should calculate correctly', () => {
  expect(calculate('*', 2, 3)).toEqual(6);
  expect(calculate('+', 7, 9)).toEqual(16);
});

test('should produce calculation result correctly', async () => {
  const browser = await puppeteer.launch({
    // to display puppeteer and animate the automation
    // headless: false,
    // slowMo: 100,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 768 });
  await page.goto('http://localhost:8080/');
  await page.type('input#firstNumber', '45');
  await page.type('input#secondNumber', '20');
  await page.select('select#operation', '*');
  await page.click('#submitButton');
  const resultText = await page.$eval('#resultBox', el => el.textContent);
  await browser.close();
  expect(resultText).toEqual('Result is 900');
}, 10000);