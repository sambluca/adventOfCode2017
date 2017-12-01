import template from '../src/day1';

test('1122 produces a sum of 3', () => {
    const answer = template.sequenceDigits(1122);

    expect(answer).toEqual(3);
});

test('1111 produces 4', () => {
    const answer = template.sequenceDigits(1111);

    expect(answer).toEqual(4);
});

test('1234 produces 0', () => {
    const answer = template.sequenceDigits(1234);

    expect(answer).toEqual(0);
});

test('91212129 produces 9', () => {
    const answer = template.sequenceDigits(91212129);

    expect(answer).toEqual(9);
});