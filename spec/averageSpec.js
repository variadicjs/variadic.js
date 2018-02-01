const { average } = require('../lib/average');

describe('average', () => {
  it('should return the average of all parameters, given that all parameters evaluate to numbers', () => {
    let result = average(1.2, 2, 9 / 3, +'4');
    expect(result).toBe(2.55);

    result = average(1);
    expect(result).toBe(1);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(average).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => average('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => average(Number.MAX_SAFE_INTEGER + 1)).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number smaller than Number.MIN_SAFE_INTEGER', () => {
    expect(() => average(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  });
});
