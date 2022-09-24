const number = Math.floor(Math.random() * 1000);

function repeatString (string, num) {
    let result = '';

    if (num < 0) {
        result = 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            result += string;
        }
    }

    return result;    
};

// test 1

repeatString('hey', 3);

// test 2
repeatString('hey', 10);

// test 3
repeatString('hey', 1);

// test 4 
repeatString('hey', 0);

// test 5 
repeatString('hey', -1);

// test 6 
repeatString('hey', number);


// Do not edit below this line
module.exports = repeatString;
