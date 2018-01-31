const { sampleVariance } = require('../lib/sampleVariance');

describe('sampleVariance', () => {
  it('should return the Sample Variance of all parameters, given that all parameters evaluate to numbers', () => {
    const result = sampleVariance(727.7, 1086.5, 1091.0, 1361.3, 1490.5, 1956.1);
    expect(result).toBe(177209.4176666666);
  });

  it('should throw an error when only 1 parameter is provided', () => {
    expect(() => sampleVariance(1)).toThrow();
  });

  it('should throw an error when no parameters are provided', () => {
    expect(sampleVariance).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => sampleVariance(1, 2, 'yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => sampleVariance(1, 2, Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => sampleVariance(1, 2, Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
