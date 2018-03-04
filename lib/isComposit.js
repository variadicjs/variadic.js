const { isPrime } = require('./isPrime');


// `isPrime` checks if the number is an integer greater than 1
// but since we simply want `isPrime` to check if this number
// is prime, we need to do the check again to avoid a false result.
const testComposit = num => (num % 1 || num < 2 ? false : !isPrime(num));

/**
 * This function evaluates whether all numerical parameters are composit
 * @memberof variadic
 * @author tdnelson2
 * @param {...*} params - One or more parameters.
 */
exports.isComposit = (...params) => {
  if (params.length === 0) throw new Error('Must provide one or more paramters');
  return params.every(testComposit);
};
