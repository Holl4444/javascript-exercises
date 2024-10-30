const fibonacci = function (num) {
  // Accept strings
  num = +num;
  // negatives not valid
  if (num < 0) {
    return "OOPS";
  }
  // fib(0) == 0
  if (num === 0) {
    return 0;
    // first 2 fibonnacis = 1
  } else if (num < 3) {
    return 1;
  } else {
    // sum of preceeding two fibonacci numbers
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
