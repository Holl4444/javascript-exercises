const reverseString = function (str) {
  let newString = "";
  let len = str.length;
  for (i = len - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
