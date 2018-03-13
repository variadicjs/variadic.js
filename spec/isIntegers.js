const { isIntegers } = require('../lib/isIntegers');

describe('isIntegers', () => {
  it('should throw an error if no parameters are provided', () => {
    expect(() => isInteger()).toThrow();
  });

  it('should throw an error if any parameters provided are not numbers', () => {
    expect(() => isInteger('')).toThrow();
    expect(() => isInteger('test', 2)).toThrow();
  });

  it('should return false if any parameters are not an integer', () => {
    expect(isInteger(2.5)).toBe(false);
    expect(isInteger(2, 2.5)).toBe(false);
  });

  it('should return true if all parameters are integers', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(2)).toBe(true);
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(-1, 0, 2)).toBe(true);
  });

  it('should return true if all parameters can parse to integer', () => {
    expect(isInteger('0')).toBe(true);
    expect(isInteger('2')).toBe(true);
    expect(isInteger('-1')).toBe(true);
    expect(isInteger('-1', '0', '2')).toBe(true);
    expect(isInteger('-1', 0, '2')).toBe(true);
  });
});
