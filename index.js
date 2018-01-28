'use strict';

// REGISTER ALL MODULES
module.exports = Object.assign(
  {},
  require('./lib/isEmpty.js'),
  require('./lib/isEqual.js'),
  require('./lib/isEven.js'),
  require('./lib/isOdd.js'),
  require('./lib/isPositiveNumber.js'),
  require('./lib/isNegativeNumber.js'),
  require('./lib/sum.js'),
  require('./lib/average.js'),
  require('./lib/floatPrecise.js')
);
