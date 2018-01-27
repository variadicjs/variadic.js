const { floatPrecise } = require('../lib/floatPrecise');

describe('floatPrecise', () => {
  it('should correct imprecision in JS floating point arithmetic', () => {
    let result = floatPrecise(0.1 + 0.2);
    expect(result).toBe(0.3);

    result = floatPrecise(0.1 + 0.7);
    expect(result).toBe(0.8);

    result = floatPrecise(0.7 / 0.1);
    expect(result).toBe(7);

    result = floatPrecise(0.7 / 0.002);
    expect(result).toBe(350);

    result = floatPrecise(0.1 * 0.2);
    expect(result).toBe(0.02);
  });
});
