const { isIntegers } = require('../lib/isIntegers');

describe('isIntegers', () => {
  it('should throw an error if no parameters are provided', () => {
    expect(() => isIntegers()).toThrow();
  });

  it('should throw an error if any parameters provided are not numbers', () => {
    expect(() => isIntegers('')).toThrow();
    expect(() => isIntegers('test', 2)).toThrow();
  });

  it('should return false if any parameters are not an integer', () => {
    expect(isIntegers(2.5)).toBe(false);
    expect(isIntegers(2, 2.5)).toBe(false);
  });

  it('should return true if all parameters are integers', () => {
    expect(isIntegers(0)).toBe(true);
    expect(isIntegers(2)).toBe(true);
    expect(isIntegers(-1)).toBe(true);
    expect(isIntegers(-1, 0, 2)).toBe(true);
  });

  it('should return true if all parameters can parse to integer', () => {
    expect(isIntegers('0')).toBe(true);
    expect(isIntegers('2')).toBe(true);
    expect(isIntegers('-1')).toBe(true);
    expect(isIntegers('-1', '0', '2')).toBe(true);
    expect(isIntegers('-1', 0, '2')).toBe(true);
  });
});
