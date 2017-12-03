// figured these out with some sweet sweet alevel maths knowledge
const findRightUpCorner = (y) => 1 - (2 * y)  + (4 * (y * y));
const findleftUpCorner = (y) => 1 + (4 * (y * y));
const findRightDownCorner = (y) => 1 + + (4 * y) + (4 * (y * y));

const findY = (n) => {
    // equationAnswer is find the findRightDownCorner equation where i've solved for y instead of n (where n is a number in the spiral)
    const equationAnswer = 0.5 * (Math.sqrt(n) - 1);
    const y = Math.round(equationAnswer);
    // find closest y value, if n is in a row this will be correct
    return y;
}

const between = (input, num1, num2) => {
    const highNum = num1 > num2 ? num1 : num2;
    const lowNum = num1 < num2 ? num1 : num2;
    return input <= highNum && input >= lowNum ? true : false;
}

const findValue = (input, higherC, lowerC, middleNum) => {
    // middle number represents middle of spiral y or x value 
    if(between(input, middleNum, lowerC)) {
        return middleNum - input;
    };

    if(between(input, middleNum, higherC)) {
        return input - middleNum;
    }

    // means number is in the middle of the row or column so y or x value is 0
    return 0;
};

const exercise1 = (input) => {
    let rowYValue = findY(input);
    let rightUpCorner = findRightUpCorner(rowYValue);
    let leftUpCorner = findleftUpCorner(rowYValue);
    let rightDownCorner = findRightDownCorner(rowYValue);
    let leftDownCorner = leftUpCorner + (leftUpCorner - rightUpCorner);
    const checkY= rightDownCorner < input ? rowYValue + 1 : rowYValue;
    
    if(checkY !== rowYValue) {
        // if true then number is in a column not a row so need to adjust
        rightUpCorner = findRightUpCorner(checkY);
        leftUpCorner = findleftUpCorner(checkY);
        rightDownCorner = findRightDownCorner(checkY);
        leftDownCorner = leftUpCorner + (leftUpCorner - rightUpCorner);
        rowYValue = checkY;
    }
    
    const columnXValue = (leftUpCorner - rightUpCorner)/2;    
    if(between(input, rightUpCorner, leftUpCorner)) {
        // checks if its in a row on the top of spiral
        const middleNum = (rightUpCorner + leftUpCorner) / 2;
        const x = findValue(input, leftUpCorner, rightUpCorner, middleNum);
        return x + rowYValue;
    }

    if(between(input, leftUpCorner, leftDownCorner)) {
        // checks if its in the left hand column of spiral
        const middleNum = (leftUpCorner + leftDownCorner) / 2;
        const y = findValue(input, leftDownCorner, leftUpCorner, middleNum);
        return  columnXValue + y;
    };

    if(between(input, leftDownCorner, rightDownCorner)) {
        // checks if its in row on the bottom of the spiral
        const middleNum = (leftDownCorner + rightDownCorner) / 2;
        const x = findValue(input, rightDownCorner, leftDownCorner, middleNum);
        return x + rowYValue;
    };

    // if it gets to here then it is in a right hand column of the spiral and this is a bit different
    
    // because its a square and the left upper corner is always bigger than right upper
    const columnYValue = rightUpCorner - input;
    return columnXValue + columnYValue;
};

export default { exercise1 }