const { average } = require('./average');
const { floatPrecise } = require('./floatPrecise');

const handleErrors = (params) => {
  if (params.length <= 1) throw new Error('Must provide two or more parameters');
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
 * This function calculates the variance
 * @memberof variadic
 * @author devNoiseConsulting
 * @param {...*} params - One or more parameters.
 */
exports.populationVariance = (...params) => {
  handleErrors(params);

  const mean = average(...params);
  // const sum = params.reduce((acc, v) => acc + ((v - mean) ** 2), 0);
  const sum = params.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0);

  return floatPrecise(sum / params.length);
};

