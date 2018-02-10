const { factorial } = require('../lib/factorial');

describe('factorial', () => {
  it('should return the factorial of all parameters, given that all parameters evaluate to numbers', () => {
    const result = factorial(0, 1, 2, 3, 4);
    expect(result).toEqual([1, 1, 2, 6, 24]);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(factorial).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => factorial(1, 2, 'yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a negative number', () => {
    expect(() => factorial(1, 2, -1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than 18', () => {
    expect(() => factorial(1, 2, Number.MAX_SAFE_INTEGER)).toThrow();
  });
});
