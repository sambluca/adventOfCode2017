const intArray = (a = data) => a.split('').map(Number);
const sequenceDigits1 = (sequence) => sequence.reduce((acc, digit, index) => {
    const nextDigit = sequence[index+1];
        if((nextDigit === digit) || (index === (sequence.length - 1) && digit == sequence[0])) {            
            return acc + digit;
        }
        return acc;
    }, 0);


const sequenceDigits2 = (sequence) => sequence.reduce((acc, digit, index) => {
    const nextDigit = sequence[index + sequence.length / 2] ;
        if(nextDigit == digit || !nextDigit && digit == sequence[index - sequence.length / 2]) {
            return acc + digit;
        }
        return acc;
    }, 0);
    

const exercise1 = sequence => sequenceDigits1(intArray(sequence));

const exercise2 = sequence => sequenceDigits2(intArray(sequence));

export default { exercise1, exercise2 }