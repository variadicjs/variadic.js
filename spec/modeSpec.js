const { mode } = require('../lib/mode');

describe('mode', () => {
  it('should return the mode of all parameters, given that all parameters evaluate to numbers', () => {
    const result = mode(1, 2, 9 / 3, 3, +'4', 5e+0);
    expect(result).toEqual([3]);
  });

  it('should return the value of the sole number if the set is of length 1', () => {
    const result = mode(1);
    expect(result).toEqual([1]);
  });

  it('should return the value of the sole number if all the numbes in the set are the same', () => {
    const result = mode(1, 2 / 2, +'1', 1e+0);
    expect(result).toEqual([1]);
  });

  it('should return an array of values if the set is bimodal or multimodal', () => {
    let result = mode(1, 1, 2, 2, 3);
    expect(result).toEqual([1, 2]);

    result = mode(1, 2, 2, 1, 4, 3, 3, 2, 1, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return "undefined" if the set has no mode', () => {
    const result = mode(1, 2, 3, 4, 5);
    expect(result).toBe(undefined);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(mode).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => mode('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => mode(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => mode(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
