const { isNegativeNumber } = require('../lib/isNegativeNumber');

describe('IsNegativeNumber', () => {
  it('should return false when all parameters are non-negative numbers', () => {
    const result = isNegativeNumber(207.43, 4, 23);
    expect(result).toBe(false);
  });

  it('should return true when all parameters are positive numbers', () => {
    const result = isNegativeNumber(-10, -33, -1);
    expect(result).toBe(true);
  });

  it('should return true when all parameters are negative and floating point numbers', () => {
    const result = isNegativeNumber(-1, -3004.56, -201.21);
    expect(result).toBe(true);
  });

  it('should return false when a string with an non-negative number is passed', () => {
    const result = isNegativeNumber(1, 3, '2');
    expect(result).toBe(false);
  });

  it('should return true when a string with an negative number is passed', () => {
    const result = isNegativeNumber(-2, -20, '-5');
    expect(result).toBe(true);
  });

  it('should return false when an object is passed', () => {
    const result = isNegativeNumber(-1, -3, {});
    expect(result).toBe(false);
  });

  it('should return false when an array is passed', () => {
    const result = isNegativeNumber(-1, -3, []);
    expect(result).toBe(false);
  });

  it('should return false when a boolean is passed', () => {
    const result = isNegativeNumber(-1, -3, true);
    expect(result).toBe(false);
  });

  it('should return false when a zero(non-positive number) is passed', () => {
    const result = isNegativeNumber(-16, -53, 0);
    expect(result).toBe(false);
  });

  it('should return false when an string not a number is passed', () => {
    const result = isNegativeNumber(-1, -76, 'hello');
    expect(result).toBe(false);
  });

  it('should return true no parameters are passed', () => {
    const result = isNegativeNumber();
    expect(result).toBe(true);
  });

  it('should return false when an empty string is passed', () => {
    const result = isNegativeNumber(' ');
    expect(result).toBe(false);
  });
});
