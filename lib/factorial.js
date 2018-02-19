// https://stackoverflow.com/a/3959275

const { isPositiveInteger } = require('./isPositiveInteger');

const handleErrors = (params) => {
  if (params.length === 0) throw new Error('Must provide one or more paramters');
  if (params.some(param => !Number.isInteger(param))) {
    throw new Error('One of your parameters does not evaluate to a integer');
  }
  // Has to be a non negative integer
  if (params.some(param => !isPositiveInteger(param) && param !== 0)) {
    throw new Error('One of your parameters does not evaluate to a positive integer');
  }
  // JS can only safely represent integers less than Number.MAX_SAFE_INTEGER
  if (params.some(param => param > 18)) {
    throw new Error('Cannot reliably return numbers larger than 9,007,199,254,740,991');
  }
};

const factorialCache = [1, 1];

const caclulateFactorial = (num) => {
  if (typeof factorialCache[num] !== 'undefined') {
    return factorialCache[num];
  }

  const start = factorialCache.length;
  for (let i = start; i <= num; i += 1) {
    factorialCache[i] = factorialCache[i - 1] * i;
  }

  return factorialCache[num];
};

/**
 * This function caculates the factorial of each numerical parameter
 * @memberof variadic
 * @author devNoiseConsulting
 * @param {...*} params - One or more parameters.
 */
exports.factorial = (...params) => {
  handleErrors(params);

  return params.map(caclulateFactorial);
};
