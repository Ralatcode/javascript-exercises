const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sumValue = 0;
	for (num of array) {
    sumValue += num;
  }
  return sumValue;
};

const multiply = function(arr) {
  let multiplyValue = 0;

  if (arr.length >= 1) {
    multiplyValue = 1;
  }
  for (num of arr) {
    multiplyValue *= num;
  }

  return multiplyValue;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }

  let result = 1; 
  for (let i = num; i > 0; i--) {
    result *= i; 
  }
  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
