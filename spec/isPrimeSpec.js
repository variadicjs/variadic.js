describe('IsPrime', () => {
  const { isPrime } = require('../lib/isPrime');

  it('should return true when all parameters evaluate to prime numbers', () => {
    const result = isPrime(2, 3, 10 / 2, +'7');
    expect(result).toBe(true);
  });

  it('should return false when at least one parameter does not evaluate to a prime number', () => {
    const result = isPrime(2, 3, 4, 5);
    expect(result).toBe(false);
  });

  it('should return false when at least one parameter does not evaluate to an integer', () => {
    const result = isPrime(2.5, 3, 4, 5);
    expect(result).toBe(false);
  });

  it('should return false when at least one parameter evaluates to a number less than 2', () => {
    const result = isPrime(-2, 3, 4, 5);
    expect(result).toBe(false);
  });

  it('should throw an error when no parameters are provided', () => {
    expect(isPrime).toThrow();
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => isPrime('yo')).toThrow();
  });

  it('should throw an error when at least one parameter evaluates to a number larger than Number.MAX_SAFE_INTEGER', () => {
    expect(() => isPrime(9949370777987917 )).toThrow();
  });
});
