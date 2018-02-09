const { isNegativeInteger } = require('../lib/isNegativeInteger');

const MAX_SAFE_INTEGER = 9007199254740991;
describe('IsNegativeInteger', () => {
  it('should return false for positive integers or 0', () => {
    expect(isNegativeInteger(2, 4, 200)).toBe(false);
    expect(isNegativeInteger(MAX_SAFE_INTEGER, 4, 200)).toBe(false);
    expect(isNegativeInteger(0, 98, 225, 56)).toBe(false);
  });

  it('should return true for negative numbers', () => {
    expect(isNegativeInteger(-3, -4, -200)).toBe(true);
    expect(isNegativeInteger(-34, -98, -225, -56)).toBe(true);
  });

  it('should return false for floats', () => {
    expect(isNegativeInteger(2.6, 4.9, 23.67)).toBe(false);
    expect(isNegativeInteger(2, 4, 23.67)).toBe(false);
    expect(isNegativeInteger(-10.2, -4.6, -200.4)).toBe(false);
    expect(isNegativeInteger(-32.7, 98, 225, 56)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isNegativeInteger({})).toBe(false);
    expect(isNegativeInteger(2, [])).toBe(false);
    expect(isNegativeInteger(1, 'S')).toBe(false);
    expect(isNegativeInteger(MAX_SAFE_INTEGER + 1)).toBe(false);
  });
});
