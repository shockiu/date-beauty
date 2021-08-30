import { ValidateDate } from '../date.js';


describe('Validate a date in format FR', () => {
    let test = new ValidateDate('13/02/1999');

    it('should return the numbers of years since 1999', () => {
        expect(test.yearsBetweenToDates()).toBe(22);
    });
})