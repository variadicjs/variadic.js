// REGISTER ALL MODULES
module.exports = Object.assign(
  {},
  require('./lib/isEmpty.js'),
  require('./lib/isEqual.js'),
  require('./lib/isEven.js'),
  require('./lib/isOdd.js'),
  require('./lib/isPositiveNumber.js'),
  require('./lib/isNegativeNumber.js')
);
