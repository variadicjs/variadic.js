
/**
 * This function evaluates whether all the parameters are decimal values
 * @memberof variadic
 * @author D1esel-Dev
 * @param {...*} params - One or more parameters.
 */
exports.isDecimal = (...params) => {
  for (const param of params) {
    // Only accept floating point numbers, infinite numbers can be allowed ie. repeating decimal
    // A decimal is a number with digits 0-9, and a decimal point, applies to negative numbers also
    // without a decimal point a number can be represented as a decimal, but wont use the case here
    if (Number.isNaN(parseFloat(param)) || !/\d/g.test(param) || !/\./.test(param)) return false;
  }
  return true;
};
