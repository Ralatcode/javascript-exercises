
function repeatString (string, num) {
    let result = '';    
    for (let i = 0; i < num; i++) {
        result += string;
    }

    return result;    
};

// test 1

repeatString('hey', 3);

// test 2
repeatString('hey', 10);

// test 3
repeatString('hey', 1);

// Do not edit below this line
module.exports = repeatString;
