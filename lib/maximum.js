const { floatPrecise } = require('./floatPrecise');

const handleErrors = (params) => {
  if (params.length === 0) throw new Error('Must provide one or more paramters');
  if (params.some(param => typeof param !== 'number')) {
    throw new Error('One of your parameters does not evaluate to a number');
  }
  // JS can only safely represent and compare integers
  // between Number.MAX_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
  if (params.some(param => param > Number.MAX_SAFE_INTEGER || param < Number.MIN_SAFE_INTEGER)) {
    throw new Error('Cannot reliably test primality of numbers larger than 9,007,199,254,740,991 or smaller than -9,007,199,254,740,991');
  }
};

exports.maximum = (...params) => {
  handleErrors(params);

  const result = params.reduce((prev, cur) => (cur > prev ? cur : prev));

  return floatPrecise(result);
};
