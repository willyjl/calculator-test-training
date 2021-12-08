const { add, multiply, validateAndParse } = require('./utils');

const executeCalculator = (event) => {
  event.preventDefault();

  const firstNumber = validateAndParse(event.target['firstNumber'].value);
  const secondNumber = validateAndParse(event.target['secondNumber'].value);
  const operation = event.target['operation'].value;

  const result = calculate(operation, firstNumber, secondNumber);
  document.getElementById('resultBox').innerText = `Result is ${result}`;
};

const calculate = (operation, firstNumber, secondNumber) => {
  if (operation === '*') {
    return multiply(firstNumber, secondNumber);
  } else {
    return add(firstNumber, secondNumber);
  }
};

const calculatorForm = document.getElementById('calculatorForm');

calculatorForm.addEventListener('submit', executeCalculator);
