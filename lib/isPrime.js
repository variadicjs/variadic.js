const leastFactor = (num) => {
  // Check if 2, 3, or 5 is a factor of num AND
  // eliminate from future consideration all possible factors that are multiples of 2, 3, and 5.
  for (const factor of [2, 3, 5]) {
    if (num % factor === 0) return factor;
  }
  // The nest of iterators below tests if num is divisible by any number
  // that is not a multiple of 2, 3 or 5 up to the square root of num.
  // All factors of any positive integer (aside from the integer itself)
  // are <= the integer's square root, so we dont need to test any numbers
  // larger than the square root of num.
  const sqrRt = Math.sqrt(num);

  for (let i = 7; i <= sqrRt; i += 30) {
    for (const n of [0, 4, 6, 10, 12, 16, 22, 24]) {
      const factor = n + i;
      if (num % factor === 0) return factor;
    }
  }
  return num;
};

// This method tests the primality of a number by trial division.
// In other words, it attempts to divide the test number by a series integers.
// If any of those integers turn out to be factors of the test number,
// then we know the test number is composite: i.e., not prime.
// the most brute force method is to simply divide the test number by every integer
// smaller than itself, but we can use our knowledge of number properties to greatly
// reduce the list of potential factors that we need to test against.
const testPrime = (num) => {
  // num % 1 checks that num is an integer.
  // There are no prime numbers less than 2, hence check for num < 2.
  if (num % 1 || num < 2) return false;
  // if the least factor of num is itself (aside from 1), then num is prime.
  if (num === leastFactor(num)) return true;
  return false;
};

/**
 * This function evaluates whether all numerical parameters are prime
 * @memberof variadic
 * @author jmbothe
 * @param {...*} params - One or more parameters.
 */
exports.isPrime = (...params) => {
  if (params.length === 0) throw new Error('Must provide one or more parameters');
  if (params.some(param => Number.isNaN(Number(param)))) throw new Error('One of your parameters does not evaluate to a number');
  // JS can only safely represent and compare integers
  // up to Number.MAX_SAFE_INTEGER: i.e., 9,007,199,254,740,991.
  // This also covers checking if any of the parameters evaluates to Infinity
  if (params.some(param => param > Number.MAX_SAFE_INTEGER)) {
    throw new Error('Cannot reliably test primality of numbers larger than 9,007,199,254,740,991');
  }
  return params.every(testPrime);
};
