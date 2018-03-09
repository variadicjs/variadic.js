const handleErrors = (params) => {
  if (params.length === 0) throw new Error('Must provide one or more paramters');
  // JS can only safely represent and compare integers between
  // Number.MAX_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
  if (params.some(param => param > Number.MAX_SAFE_INTEGER || param < Number.MIN_SAFE_INTEGER)) {
    throw new Error('Cannot reliably test primality of numbers larger than 9,007,199,254,740,991 or smaller than -9,007,199,254,740,991');
  }
};
/**
 * This function evaluates whether all the parameters are decimal values
 * @memberof variadic
 * @author D1esel-Dev
 * @param {...*} params - One or more parameters.
 */
exports.isDecimal = (...params) => {
  handleErrors(params);
  for (const param of params) {
    // Only accept floating point numbers, infinite numbers can be allowed ie. repeating decimal
    // A decimal is a number with digits 0-9, and a decimal point, applies to negative numbers also
    // without a decimal point a number can be represented as a decimal, but wont use the case here
    if (Number.isNaN(parseFloat(param)) || !/\d/g.test(param) || !/\./.test(param)) return false;
  }
  return true;
};
