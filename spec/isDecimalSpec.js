const { isDecimal } = require('../lib/isDecimal');

describe('isDecimal', () => {
  it('should return true when all parameters are decimals', () => {
    const result = isDecimal(2.1, -4.21, 200.123);
    expect(result).toBe(true);
  });

  it('should return false when all parameters are not decimals', () => {
    const result = isDecimal(1, -4, 200);
    expect(result).toBe(false);
  });

  it('should return false when any parameter is not a decimal', () => {
    const result = isDecimal(1.1, -4.2, 200);
    expect(result).toBe(false);
  });

  it('should return true when a decimal string with all decimal numbers are passed', () => {
    const result = isDecimal(2.1, -4.2, '5.12');
    expect(result).toBe(true);
  });

  it('should return false when a decimal string with a non decimal number is passed', () => {
    const result = isDecimal(2.1, -4, '5.12');
    expect(result).toBe(false);
  });

  it('should return false when a non decimal string is passed', () => {
    const result = isDecimal(2.1, -4, '5');
    expect(result).toBe(false);
  });

  it('should return false when an object is passed', () => {
    const result = isDecimal(2.1, -4, {});
    expect(result).toBe(false);
  });

  it('should return false when an array is passed', () => {
    const result = isDecimal(2.1, -4, []);
    expect(result).toBe(false);
  });

  it('should return false when a boolean is passed', () => {
    const result = isDecimal(2.1, -4, true);
    expect(result).toBe(false);
  });
});