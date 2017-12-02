// I've used the day2 python script to transform the input data to an array of arrays because i wanted to practise python
const exercise1 = (input) => 
    input.map((line) => Math.max(...line) - Math.min(...line))
    .reduce((acc, digit) => acc + digit, 0);
export default { exercise1 }


    