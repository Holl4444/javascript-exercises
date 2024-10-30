// Be aware that we are testing against inputs that are
// already integers. Not strings that need converting.

const sumAll = function (start, end) {
  let result = 0;

  // Get positive integers only
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  } else if (start < 0 || end < 0) {
    return "ERROR";
  }

  // Make sure we can iterate upwards
  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
    temp = 0;
  }

  // Inner function to keep var inside function body
  function sumAllInner(start, end) {
    if (start === end + 1) {
      return 0;
    } else {
      result += start;
      sumAllInner(start + 1, end);
    }
  }
  sumAllInner(start, end);
  return result;
};

// Do not edit below this line
module.exports = sumAll;
