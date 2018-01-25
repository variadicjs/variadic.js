'use strict';

const { isEmpty } = require('../lib/isEmpty');

describe('IsEmpty', () => {
  it('should return true when you pass an empty string', () => {
    const result = isEmpty('');
    expect(result).toBe(true);
  });

  it('should return false when pass a non empty string', () => {
    const result = isEmpty('test');
    expect(result).toBe(false);
  });

  it('should return true when you pass 0', () => {
    const result = isEmpty(0);
    expect(result).toBe(true);
  });

  it('should return false when pass a number that is not 0', () => {
    const result = isEmpty(12);
    expect(result).toBe(false);
  });

  it('should return true when you pass an empty object', () => {
    const result = isEmpty({});
    expect(result).toBe(true);
  });

  it('should return false when pass a non empty object', () => {
    const result = isEmpty({ test: 1 });
    expect(result).toBe(false);
  });

  it('should return true when you pass false', () => {
    const result = isEmpty(false);
    expect(result).toBe(true);
  });

  it('should return false when you pass true', () => {
    const result = isEmpty(true);
    expect(result).toBe(false);
  });
});
