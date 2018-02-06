const { isPositiveInteger } = require('../lib/isPositiveInteger');

const MAX_SAFE_INTEGER = 9007199254740991;
describe('IsPositiveInteger', () => {
  it('should return true for positive integers', () => {
    expect(isPositiveInteger(2, 4, 200)).toBe(true);
    expect(isPositiveInteger(MAX_SAFE_INTEGER, 4, 200)).toBe(true);
    expect(isPositiveInteger(34, 98, 225, 56)).toBe(true);
  });

  it('should return false for negative numbers or 0', () => {
    expect(isPositiveInteger(0, 4, 200)).toBe(false);
    expect(isPositiveInteger(-3, -4, -200)).toBe(false);
    expect(isPositiveInteger(34, -98, 225, 56)).toBe(false);
  });

  it('should return false for floats', () => {
    expect(isPositiveInteger(2.6, 4.9, 23.67)).toBe(false);
    expect(isPositiveInteger(2, 4, 23.67)).toBe(false);
    expect(isPositiveInteger(-10.2, -4.6, -200.4)).toBe(false);
    expect(isPositiveInteger(-32.7, 98, 225, 56)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isPositiveInteger({})).toBe(false);
    expect(isPositiveInteger(2, [])).toBe(false);
    expect(isPositiveInteger(1, 'S')).toBe(false);
    expect(isPositiveInteger(MAX_SAFE_INTEGER + 1)).toBe(false);
  });
});
