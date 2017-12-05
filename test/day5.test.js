import { exercise1 } from '../src/day5/day5';
import data from '../data/day5';

describe('exercise 1', ()=> {
    test('example data', () => {
        const answer = exercise1([0, 3, 0, 1, -3]);
        expect(answer).toEqual(5);
    });

    test('input data', () => {
        const answer = exercise1(data);
        expect(answer).toEqual(342669);
    });
});
