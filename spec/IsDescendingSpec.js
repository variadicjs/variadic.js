'use strict';

const { isDescending } = require('../lib/isDescending');

describe('IsDescending', () => {
  it('should return true when the parameters are in descending order', () => {
    const result = isDescending(3, 2, 1);
    expect(result).toBe(true);
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => isDescending('foo', 'bar')).toThrow();
  });

  it('should throw an error when there are less than two parameterss', () => {
    expect(() => isDescending(3)).toThrow();
  });

  it('should return false when the parameters are not in descending order', () => {
    const result = isDescending(3, 5.8, 2, 1);
    expect(result).toBe(false);
  });
});
