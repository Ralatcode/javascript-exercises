const palindromes = function (str) {
    let splitStr = str.toLowerCase().split('');
    const punctStrip = splitStr.filter((char) => {
        if (char === ' ' || char === ',' || char === '!' || char === '.') {
            return false;
        } else {
            return true;
        }
    });

    const newStr = punctStrip.join('');
    const reverseStr = punctStrip.reverse().join('');

    if (newStr === reverseStr) {
        return true;
    } else {
        return false;
    }
};



// Do not edit below this line
module.exports = palindromes;
