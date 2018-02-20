/**
 * This function evaluates whether all numerical parameters are odd
 * @memberof variadic
 * @author khusbuchandra
 * @param {...*} params - One or more parameters.
 */
exports.isOdd = (...params) => {
  for (const param of params) {
    // Only accept finite numbers
    if (Number.isNaN(parseFloat(param)) || !Number.isFinite(Number(param))) return false;
    // Only accept odds
    else if (param % 2 === 0) return false;
  }
  return true;
};
