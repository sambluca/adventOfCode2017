import { exercise1, exercise2 } from '../src/day1';
import data from './data/day1';

describe('exercise 1', ()=> {
    test('1122 produces a sum of 3', () => {
        const answer = exercise1('1122');
        expect(answer).toEqual(3);
    });
    
    test('1111 produces 4', () => {
        const answer = exercise1('1111');
        expect(answer).toEqual(4);
    });
    
    test('1234 produces 0', () => {
        const answer = exercise1('1234');
        expect(answer).toEqual(0);
    });
    
    test('91212129 produces 9', () => {
        const answer = exercise1('91212129');
        expect(answer).toEqual(9);
    });
    
    test('test data', () => {
        const answer = exercise1(data);
        expect(answer).toEqual(1182);
    });
});

describe('exercise 2', ()=> {
    test('1212 produces 6', () => {
        const answer = exercise2('1212');
        expect(answer).toEqual(6);
    });
    
    test('1221 produces 0', () => {
        const answer = exercise2('1221');
        expect(answer).toEqual(0);
    });
    
    test('123425 produces 4', () => {
        const answer = exercise2('123425');
        expect(answer).toEqual(4);
    });
    
    test('123123 produces 12', () => {
        const answer = exercise2('123123');
        expect(answer).toEqual(12);
    });
    
    test('12131415 produces 4', () => {
        const answer = exercise2('12131415');
        expect(answer).toEqual(4);
    });

    test('test data', () => {
        const answer = exercise2(data);
        expect(answer).toEqual(1152);
    });

});