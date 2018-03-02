const { absoluteValue } = require('../lib/absoluteValue');

describe('absoluteValue', () => {
  it('should return the absolute value of all parameters, given that all parameters evaluate to numbers', () => {
    let result = absoluteValue(1.6,-2.3325,-9007199254740990,596960,3938475,+"-395757");
    expect(result).toEqual([1.6, 2.3325, 9007199254740990, 596960, 3938475, 395757]);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(absoluteValue).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => absoluteValue('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => absoluteValue(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => absoluteValue(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
