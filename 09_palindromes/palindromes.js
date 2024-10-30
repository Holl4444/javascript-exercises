const palindromes = function (str) {
  let regex = /[\s\W]/g;
  // replaces all occurences of whitespace, anything that isnt a
  // letter, number or underscore within the string with empty string
  // and sets all to lowercase.
  str = str.replace(regex, "").toLowerCase();
  // Compare the string to the string reversed. Matching = true
  return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
