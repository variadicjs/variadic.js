exports.isPrime = (...params) => {
  if (params.length === 0) throw 'Must provide one or more paramters';
  if (params.some(isNaN)) throw 'One of your parameters is not a number';
  // JS can only safely represent and compare integers
  // up to Number.MAX_SAFE_INTEGER: i.e., 9,007,199,254,740,991.
  // this includes Infinity
  if (params.some(param => param > Number.MAX_SAFE_INTEGER)) {
    throw 'Cannot reliably test primality of numbers larger than 9,007,199,254,740,991';
  }
  return params.every(testPrime);
}
// This method tests the primality of a number by trial division.
// In other words, it attempts to divide the test number by a series integers.
// If any of those integers turn out to be factors of the test number,
// then we know the test number is composite: i.e., not prime.
// the most brute force method is to simply divide the test number by every integer smaller than itself,
// but we can use our knowledge of number properties to greatly reduce the list of 
// potential factors of the test number.
const testPrime = (num) => {
  // num % 1 checks that num is an integer
  // There are no prime numbers less than 2, hence check for num < 2
  if (num % 1 || num < 2) return false; 

  // if the least factor of num is itself (aside from 1), then num is prime
  if (num === leastFactor(num)) return true;
  return false;
 }
 
const leastFactor = (num) => {
  // all factors of any positive integer are <= the integer's square root
  // so we dont need to test any numbers larger than the square root of num
  const sqrRt = Math.sqrt(num);
  const firstThreeFactors = [2, 3, 5];
  const factorBuildPattern = [0, 4, 6, 10 ,12, 16, 22, 24];

  // Check if 2, 3, or 5 is a factor of num AND
  // eliminate from future consideration all possible factors that are multiples of 2, 3, 5
  for (factor of firstThreeFactors) {
    if (num % factor === 0) return factor;
  }
  // test if num is divisible by any odd number that is not a multiple of 3 or 5
  // up to the square root of num
  for (let i = 7; i <= sqrRt; i += 30) {
    for (n of factorBuildPattern) {
      const factor = n + i
      if (num % factor === 0) return factor;
    }
  }
  return num;
}