const findTheOldest = function (list) {
  // get the current year
  let thisYear = new Date().getUTCFullYear();
  // make a list of ages from the list argument. If there is no death date use current year
  let ages = list.map((i) =>
    i.yearOfDeath ? i.yearOfDeath - i.yearOfBirth : thisYear - i.yearOfBirth
  );
  // Check through ages comparing focused element to each in the list and keeping only the largest
  let max = ages.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
  });

  //  Find the index of the oldest in age and return the object at that index of original list. ie the oldest person
  let indx = ages.indexOf(max);

  return list[indx];
};

// Do not edit below this line
module.exports = findTheOldest;
