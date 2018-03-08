const { range } = require('../lib/range');

describe('range', () => {
  it('should return either 0 or a positive number', () => {
    const result = range(-296.028, 296.028, 42, +'-42');
    expect(result >= 0).toBe(true);
  });

  it('should return the difference between the largest and smallest values', () => {
    const result = range(1.6, -2.3325, 596960, 3938475.31589, +'-395757.326518');
    expect(result).toEqual(4334232.642408);
  });

  it('should return 0 when all there numbers are identical', () => {
    const result = range(296.028, 296.028, 296.028, 296.028);
    expect(result).toEqual(0);
  });

  it('should return 0 when only one number is provided', () => {
    const result = range(296.028);
    expect(result).toEqual(0);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(range).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => range(42, 'foo', 'bar')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => range(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => range(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });

  it('should throw an error when result is number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => range(1.6, -2.3325, 9007199254740990, 596960, -3938475)).toThrow();
  });

  it('should throw an error when result is number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => range(1.6, -2.3325, -9007199254740990, 596960, 3938475)).toThrow();
  });
});
