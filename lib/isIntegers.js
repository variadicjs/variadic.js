/**
 * This function evaluates whether all parameters are integers
 * @memberof variadic
 * @author someyoungideas
 * @param {...*} params - One or more parameters.
 */
exports.isIntegers = (...params) => {
  if (params.length === 0) throw Error('Please provide at least one number to evaluate isInteger.');
  if (params.some(param => Number.isNaN(Number.parseFloat(param)))) throw Error('Please provide all numbers to evaluate isInteger.');
  if (params.some(param => !Number.isInteger(Number.parseFloat(param)))) return false;

  return true;
};
