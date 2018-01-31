const { populationVariance } = require('../lib/populationVariance');

describe('populationVariance', () => {
  it('should return the Population Variance of all parameters, given that all parameters evaluate to numbers', () => {
    const result = populationVariance(2, 4, 4, 4, 5, 5, 7, 9);
    expect(result).toBe(4);
  });

  it('should throw an error when only 1 parameter is provided', () => {
    expect(() => populationVariance(1)).toThrow();
  });

  it('should throw an error when no parameters are provided', () => {
    expect(populationVariance).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => populationVariance(1, 2, 'yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => populationVariance(1, 2, Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => populationVariance(1, 2, Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
