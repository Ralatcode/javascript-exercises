function reverseString(str) {
    // splits string into characters and returns an array
    let splitString = str.split('');
    // reverse arrays
    let reverseArray = splitString.reverse();
    // joins array to string
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
