describe('IsPositiveNumber', () => {
    const { isPostiveNumber } = require('../lib/isPositiveNumber');
  
    it('should return false when all parameters are non-positive numbers', () => {
      const result = isPostiveNumber(-2, -45.34, -23);
      expect(result).toBe(false);
    });
  
    it('should return true when all parameters are positive numbers', () => {
      const result = isPostiveNumber(10, 33, 1);
      expect(result).toBe(true);
    });
  
    it('should return true when all parameters are positive and floating point numbers', () => {
      const result = isPostiveNumber(1, 3, 201.21);
      expect(result).toBe(true);
    });
  
    it('should return false when a string with an non-positive number is passed', () => {
      const result = isPostiveNumber(1, 3, '-2');
      expect(result).toBe(false);
    });
  
    it('should return true when a string with an positive number is passed', () => {
      const result = isPostiveNumber(2, 20, '5');
      expect(result).toBe(true);
    });
  
    it('should return false when an object is passed', () => {
      const result = isPostiveNumber(1, 3, {});
      expect(result).toBe(false);
    });
  
    it('should return false when an array is passed', () => {
      const result = isPostiveNumber(1, 3, []);
      expect(result).toBe(false);
    });
  
    it('should return false when a boolean is passed', () => {
      const result = isPostiveNumber(1, 3, true);
      expect(result).toBe(false);
    });

    it('should return false when a zero(non-positive number) is passed', () => {
        const result = isPostiveNumber(1, 3, 0);
        expect(result).toBe(false);
      });

    it('should return false when an string not a number is passed', () => {
        const result = isPostiveNumber(1, 3, 'hello');
        expect(result).toBe(false);
      });

    it('should return true no parameters are passed', () => {
        const result = isPostiveNumber();
        expect(result).toBe(true);
      });

    it('should return false when an empty string is passed', () => {
        const result = isPostiveNumber(' ');
        expect(result).toBe(false);
      });
  });