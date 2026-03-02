// JS can only safely represent and compare integers
// between Number.MAX_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
const testMaxMinSafe = (params) => {
  if (params.some(param => param > Number.MAX_SAFE_INTEGER || param < Number.MIN_SAFE_INTEGER)) {
    throw new Error('Cannot reliably find the range of numbers larger than 9,007,199,254,740,991 or smaller than -9,007,199,254,740,991');
  }
};

const handleErrors = (params) => {
  if (params.length === 0) throw new Error('Must provide one or more parameters');
  if (params.some(param => typeof param !== 'number')) {
    throw new Error('One of your parameters does not evaluate to a number');
  }
  testMaxMinSafe(params);
};

/**
 * This function returns the difference between the largest and smallest values
 * @memberof variadic
 * @author tdnelson2
 * @param {...*} params - One or more parameters.
 */
exports.range = (...params) => {
  handleErrors(params);

  // Exit early if there is only one value
  if (params.length === 1) return 0;

  // Assign first value in the param list to the `high` and `low` variables
  let [high, low] = [params[0], params[0]];
  const [, ...nums] = params;

  // Loop through the rest of the parameters and compare/update `high` and `low`
  for (const num of nums) {
    if (num > high) { high = num; } else if (num < low) { low = num; }
  }

  const result = high - low;
  testMaxMinSafe([result]);
  return result;
};
