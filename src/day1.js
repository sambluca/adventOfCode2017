import template from '../src/day1';
const intArray = (a = data) => a.split('').map(Number);
const sequenceDigits = (sequence) => sequence.reduce((acc, digit, index) => {
    const nextDigit = sequence[index+1];
        if((nextDigit === digit) || (index === (sequence.length - 1) && digit == sequence[0])) {            
            return acc + digit;
        }
        return acc;
    }, 0);

const day1 = sequence => sequenceDigits(intArray(sequence));
export default { day1 }