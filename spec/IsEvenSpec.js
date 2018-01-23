describe('IsEven', () => {
    const { isEven } = require('../lib/isEven');

    it('should return true when all parameters are even numbers', () => {
        const result = isEven(2, 4, 200);
        expect(result).toBe(true);
    });

    it('should return false when all parameters are odd numbers', () => {
        const result = isEven(1, 3, 1);
        expect(result).toBe(false);
    });

    it('should return false when any parameter is a floating point numbers', () => {
        const result = isEven(2, 4, 200.22);
        expect(result).toBe(false);
    });

    it('should return false when a string with an odd number is passed', () => {
        const result = isEven(2, 4, '5');
        expect(result).toBe(false);
    });

    it('should return true when a string with an even number is passed', () => {
        const result = isEven(2, 4, '8');
        expect(result).toBe(true);
    });

    it('should return false when an object is passed', () => {
        const result = isEven(2, 4, {});
        expect(result).toBe(false);
    });

    it('should return false when an array is passed', () => {
        const result = isEven(2, 4, []);
        expect(result).toBe(false);
    });

    it('should return false when a boolean is passed', () => {
        const result = isEven(2, 4, true);
        expect(result).toBe(false);
    });
});
