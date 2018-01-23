describe('IsEqual', () => {
    const { isEqual } = require('../lib/isEqual');

    it('should throw an error when no paramters are passed', () => {
        try {
            const result = isEqual();
        } catch (e) {
            expect(e).toBe('Must provide one or more paramters');
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
});
