exports.add = (a, b) => {
  return a+b;
};

exports.multiply = (a, b) => {
  return a*b;
};

exports.validateAndParse = (value) => {
  if (typeof value !== 'string') return 0;

  return parseInt(value, 10);
};
