const removeFromArray = function (arr, ...items) {
  let idx;
  for (i = 1; i < arguments.length; i++) {
    idx = arr.indexOf(arguments[i]);
    while (arr.includes(arguments[i])) {
      arr.splice(idx, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
