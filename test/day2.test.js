import { exercise1 } from '../src/day2/day2';
import data from '../data/day2';

describe('exercise 1', ()=> {
    test('example data', () => {
        const answer = exercise1([[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]]);
        expect(answer).toEqual(18);
    });

    test('input data', () => {
        const answer = exercise1(data);
        expect(answer).toEqual(44216);
    });

});
