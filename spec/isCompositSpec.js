const { isComposit } = require('../lib/isComposit');

describe('IsComposit', () => {
  it('should return true when all parameters evaluate to composit numbers', () => {
    const result = isComposit(4, 6, 20 / 2, +'8');
    expect(result).toBe(true);
  });

  it('should return false when at least one parameter does not evaluate to a composit number', () => {
    const result = isComposit(2, 8, 10, 28);
    expect(result).toBe(false);
  });

  it('should return false when at least one parameter does not evaluate to an integer', () => {
    const result = isComposit(2.5, 8, 10, 20);
    expect(result).toBe(false);
  });

  it('should return false when at least one parameter evaluates to a number less than 2', () => {
    const result = isComposit(-2, 8, 10, 20);
    expect(result).toBe(false);
  });

  it('should return false when the least factor of a number is not composit', () => {
    const result = isComposit(15485863);
    expect(result).toBe(false);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(isComposit).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => isComposit('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => isComposit(9949370777987917)).toThrow();
  });
});
