const { average } = require('./average');

const handleErrors = (params) => {
  if (params.length === 0) throw new Error('Must provide one or more parameters');
  if (params.some(param => typeof param !== 'number')) {
    throw new Error('One of your parameters does not evaluate to a number');
  }
  // JS can only safely represent and compare integers between
  // Number.MAX_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
  if (params.some(param => param > Number.MAX_SAFE_INTEGER || param < Number.MIN_SAFE_INTEGER)) {
    throw new Error('Cannot reliably test primality of numbers larger than 9,007,199,254,740,991 or smaller than -9,007,199,254,740,991');
  }
};

/**
 * This function finds the median parameter value
 * @memberof variadic
 * @author jmbothe
 * @param {...*} params - One or more parameters.
 */
exports.median = (...params) => {
  handleErrors(params);

  const sorted = params.sort((a, b) => a - b);
  const n = sorted.length;

  // if length of list is even, take the average of the middle two numbers
  if (n % 2 === 0) {
    return average(sorted[(n / 2) - 1], sorted[n / 2]);
  }

  // else just return the middle number
  return sorted[Math.floor(n / 2)];
};
