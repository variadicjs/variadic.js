const { isOdd } = require('../lib/isOdd');

describe('IsOdd', () => {
  it('should return false when all parameters are even numbers', () => {
    const result = isOdd(2, 4, 200);
    expect(result).toBe(false);
  });

  it('should return true when all parameters are odd numbers', () => {
    const result = isOdd(1, 3, 1);
    expect(result).toBe(true);
  });

  it('should return true when all parameters are odd and floating point numbers', () => {
    const result = isOdd(1, 3, 201.21);
    expect(result).toBe(true);
  });

  it('should return false when a string with an even number is passed', () => {
    const result = isOdd(1, 3, '8');
    expect(result).toBe(false);
  });

  it('should return true when a string with an odd number is passed', () => {
    const result = isOdd(1, 3, '5');
    expect(result).toBe(true);
  });

  it('should return false when an object is passed', () => {
    const result = isOdd(1, 3, {});
    expect(result).toBe(false);
  });

  it('should return false when an array is passed', () => {
    const result = isOdd(1, 3, []);
    expect(result).toBe(false);
  });

  it('should return false when a boolean is passed', () => {
    const result = isOdd(1, 3, true);
    expect(result).toBe(false);
  });
});
