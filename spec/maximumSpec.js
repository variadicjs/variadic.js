const { maximum } = require('../lib/maximum');

describe('maximum', () => {
  it('should return the maximum of all parameters, given that all parameters evaluate to numbers', () => {
    const result = maximum(1, 5, -7, 15, 10);
    expect(result).toBe(15);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(maximum).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => maximum('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => maximum(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => maximum(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
