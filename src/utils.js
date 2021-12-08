const add = (a, b) => {
  return a+b;
};

const multiply = (a, b) => {
  return a*b;
};

exports.validateAndParse = (value) => {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return 0;

  return parseInt(value, 10);
};

const calculate = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '*':
      return multiply(firstNumber, secondNumber);
  
    default:
      return add(firstNumber, secondNumber);
  }
};

exports.add = add;
exports.multiply = multiply;
exports.calculate = calculate;