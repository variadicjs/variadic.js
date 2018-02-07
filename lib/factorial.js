// https://stackoverflow.com/a/3959275

const { isPositiveInteger } = require('./isPositiveInteger');

const factorialCache = [1, 1];

const caclulateFactorial = (num) => {
  if (typeof factorialCache[num] !== 'undefined') {
    return factorialCache[num];
  }

  const start = factorialCache.length <= num ? factorialCache.length - 1 : num - 1;
  for (let i = start + 1; i <= num; i += 1) {
    factorialCache[i] = factorialCache[i - 1] * i;
  }

  return factorialCache[num];
};

exports.factorial = (...params) => {
  handleErrors(params);

  return params.map(caclulateFactorial);
};

const handleErrors = (params) => {
  if (params.length === 0) throw new Error('Must provide one or more paramters');
  if (params.some(param => !Number.isInteger(param))) {
    throw new Error('One of your parameters does not evaluate to a integer');
  }
  // Has to be a non negative integer
  if (params.some(param => !isPositiveInteger(param))) {
    throw new Error('One of your parameters does not evaluate to a positive integer');
  }
  // JS can only safely represent and compare integers between
  // Number.MAX_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
  if (params.some(param => param > Number.MAX_SAFE_INTEGER || param < Number.MIN_SAFE_INTEGER)) {
    throw new Error('Cannot reliably test primality of numbers larger than 9,007,199,254,740,991 or smaller than -9,007,199,254,740,991');
  }
};
