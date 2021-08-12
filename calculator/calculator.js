const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	if (arr.length === 0) {
    return 0
  }
  return arr.reduce( (acc, value) => acc + value )
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0
  }
  return arr.reduce( (acc, value) => acc * value )
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(x) {
  let fact = 1;
	for (x; x > 1; x--) {
    fact *= x
  }
  return fact
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
