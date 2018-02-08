const { minimum } = require('../lib/minimum');

describe('minimum', () => {
  it('should return the minimum of all parameters, given that all parameters evaluate to numbers', () => {
    const result = minimum(1, 5, -7, 15, 10);
    expect(result).toBe(-7);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(minimum).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => minimum('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => minimum(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => minimum(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
