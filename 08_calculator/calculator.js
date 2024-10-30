const add = function (num1, num2) {
  let result = num1 + num2;
  return result;
};

const subtract = function (num1, num2) {
  let result = num1 - num2;
  return result;
};

const sum = function (array) {
  result = 0;
  for (i = 0, len=array.length; i < len; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function (array) {
  if (array.length === 0) {
    result = 0;
  } else {
    result = 1;
  }
  for (num in array) {
    array[num] = +array[num];
    result *= array[num];
  }
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
