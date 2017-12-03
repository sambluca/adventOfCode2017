import { exercise1, exercise2 } from '../src/day3/day3';

describe('exercise 1', ()=> {
    test('manhatten distance is 2 lower row', () => {
        const answer = exercise1(23);
        expect(answer).toEqual(2);
    });

    test('manhatten distance is 3 lower row', () => {
        const answer = exercise1(24);
        expect(answer).toEqual(3);
    });

    test('manhatten distance is 4', () => {
        const answer = exercise1(33);
        expect(answer).toEqual(4);
    });

    test('manhatten distance is 3', () => {
        const answer = exercise1(12);
        expect(answer).toEqual(3);
    });

    test('manhatten distance is 3', () => {
        const answer = exercise1(18);
        expect(answer).toEqual(3);
    });


    test('manhatten distance is 31', () => {
        const answer = exercise1(1024);
        expect(answer).toEqual(31);
    });

    test('input data', () => {
        const answer = exercise1(347991);
        expect(answer).toEqual(480);
    });
});

describe('exercise 2', ()=> {
    test.only('input data', () => {
        const answer = exercise2(347991);
        expect(answer).toEqual(349975);
    });
});

