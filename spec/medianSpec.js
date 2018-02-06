const { median } = require('../lib/median');

describe('median', () => {
  it('should return the median of all parameters, given that all parameters evaluate to numbers', () => {
    const result = median(1.2, 2, 9 / 3, +'4', 5e+0);
    expect(result).toBe(3);
  });

  it('should return the median of all parameters, even if the list is not pre-sorted', () => {
    const result = median(5, 2, 1, 3, 4);
    expect(result).toBe(3);
  });

  it('should return the average of the middle two params if the number of params is even', () => {
    const result = median(1, 2, 3, 4);
    expect(result).toBe(2.5);
  });

  it('should return the median of a set of length 1', () => {
    const result = median(1);
    expect(result).toBe(1);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(median).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => median('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => median(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => median(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
