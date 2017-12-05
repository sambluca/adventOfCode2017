const exercise1 = (input) => {
    var steps = 0;
    var index = 0;
    while(index >= 0 && index < input.length) {
        index += input[index]++;
        steps++;
    }
    return steps;
};

const exercise2 = (input) => {
    var steps = 0;
    var index = 0;
    while(index >= 0 && index < input.length) {
        index += input[index]++;
        steps++;
    }


    return steps;
};


export default { exercise1, exercise2 }