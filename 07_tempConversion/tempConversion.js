const ftoc = function(f) {
  let result = (f - 32) * (5 / 9);
  let finalResult = Math.round(result * 10) / 10;
  return finalResult;
};

const ctof = function(c) {
  let result = c * (9 / 5) + 32;
  let finalResult = Math.round(result * 10) / 10;
  return finalResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
