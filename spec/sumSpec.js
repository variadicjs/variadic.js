const { sum } = require('../lib/sum');

describe('sum', () => {
  it('should return the sum of all parameters, given that all parameters evaluate to numbers', () => {
    let result = sum(1.2, 2, 9 / 3, +'4');
    expect(result).toBe(10.2);

    result = sum(1);
    expect(result).toBe(1);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(sum).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => sum('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => sum(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => sum(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
