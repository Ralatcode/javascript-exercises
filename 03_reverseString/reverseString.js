function reverseString(str) {
    let splitString = str.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');

    return joinArray;
};

// test 1
reverseString('hello');

// test 2
reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
