'use strict';

const { isAscending } = require('../lib/isAscending');

describe('IsDescending', () => {
  it('should return true when the parameters are in ascending order', () => {
    const result = isAscending(1, 2, 3);
    expect(result).toBe(true);
  });

  it('should throw an error when at least one parameter does not evaluate to a number', () => {
    expect(() => isAscending('foo', 'bar')).toThrow();
  });

  it('should throw an error when there are less than two paramters', () => {
    expect(() => isAscending(3)).toThrow();
  });

  it('should return false when the parameters are not in ascending order', () => {
    const result = isAscending(3, 5.8, 2, 1);
    expect(result).toBe(false);
  });
});
