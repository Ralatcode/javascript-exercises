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

// test 3
reverseString('123! abc!');

// test 4 
reverseString('');

// Do not edit below this line
module.exports = reverseString;
