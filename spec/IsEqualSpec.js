const { isEqual } = require('../lib/isEqual');

describe('IsEqual', () => {
  it('should throw an error when no paramters are passed', () => {
    try {
      isEqual();
    } catch (e) {
      expect(e.message).toBe('Must provide one or more paramters');
    }
  });

  it('should return true when all paramters are the same', () => {
    const result = isEqual(1, 1, 1);
    expect(result).toBe(true);
  });

  it('should return false when any paramters are not the same', () => {
    const result = isEqual(1, 1, '1');
    expect(result).toBe(false);
  });

  it('should return true when all boolean paramters are the same', () => {
    const result = isEqual(false, false, false);
    expect(result).toBe(true);
  });

  it('should return false when all boolean paramters are not the same', () => {
    const result = isEqual(false, false, 0);
    expect(result).toBe(false);
  });

  it('should return true when all string paramters are the same', () => {
    const result = isEqual('test', 'test', 'test');
    expect(result).toBe(true);
  });

  it('should return false when all string paramters are not the same', () => {
    const result = isEqual('test', 'test', 'test2');
    expect(result).toBe(false);
  });

  it('should return false when array paramters are not all the same length', () => {
    const result = isEqual([], [2], [3]);
    expect(result).toBe(false);
  });

  it('should return true when all array paramters are the same', () => {
    const result = isEqual([2], [2], [2]);
    expect(result).toBe(true);
  });

  it('should return false when all array paramters are not the same', () => {
    const result = isEqual([2], [4], [4]);
    expect(result).toBe(false);
  });

  it('should return false when objects paramters do not have the same key length', () => {
    const result = isEqual({
      value: 8,
    }, {}, {
      value: 8,
      anothervalue: 9,
    }, {
      value: 8,
    });
    expect(result).toBe(false);
  });

  it('should return false when objects paramters do not have the same keys', () => {
    const result = isEqual({
      value1: 8,
    }, {
      value2: 8,
    }, {
      value3: 8,
    });
    expect(result).toBe(false);
  });

  it('should return false when objects paramters do not have the same values', () => {
    const result = isEqual({
      value1: 8,
    }, {
      value1: 8,
    }, {
      value1: 8,
    }, {
      value1: 8,
    }, {
      value1: 9,
    });
    expect(result).toBe(false);
  });

  it('should return true when objects paramters are all the same', () => {
    const result = isEqual({
      value: 8,
    }, {
      value: 8,
    }, {
      value: 8,
    });
    expect(result).toBe(true);
  });
});
