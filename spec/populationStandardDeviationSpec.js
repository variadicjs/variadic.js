const { populationStandardDeviation } = require('../lib/populationStandardDeviation');

describe('populationStandardDeviation', () => {
  it('should return the Population Standard Deviation of all parameters, given that all parameters evaluate to numbers', () => {
    const result = populationStandardDeviation(2, 4, 4, 4, 5, 5, 7, 9);
    expect(result).toBe(2);
  });

  it('should throw an error when only 1 parameter is provided', () => {
    expect(() => populationStandardDeviation(1)).toThrow();
  });

  it('should throw an error when no parameters are provided', () => {
    expect(populationStandardDeviation).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => populationStandardDeviation(1, 2, 'yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => populationStandardDeviation(1, 2, Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => populationStandardDeviation(1, 2, Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
