// I've used the day2 python script to transform the input data to an array of arrays because i wanted to practise python
const exercise1 = (input) => 
    input.map((line) => Math.max(...line) - Math.min(...line))
    .reduce((acc, digit) => acc + digit, 0);

const exercise2 = (input) => 
    input.map((line) => divideValue(line))
    .reduce((acc, digit) => acc + digit);

const divideValue = (input) => input.reduce((acc, digit, index) => {
    input.forEach((element, i) => {
        acc = (digit%element === 0 && index !== i) ? digit/element : acc;
    });
    return acc;
}, 0)

export default { exercise1, exercise2 }