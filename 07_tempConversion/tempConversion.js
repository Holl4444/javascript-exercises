const DECIMAL = 1;

function decimalPlace(float, places) {
  let scale = Math.pow(10, places);
  let numPlaced = Math.round(float * scale) / scale;
  return numPlaced;
}

// °C = (°F - 32) × 5/9
const convertToCelsius = function (degreesF) {
  let degreesC = (degreesF - 32) * (5 / 9);
  degreesC = decimalPlace(degreesC, DECIMAL);
  return degreesC;
};

const convertToFahrenheit = function (degreesC) {
  let degreesF = degreesC / (5 / 9) + 32;
  degreesF = decimalPlace(degreesF, DECIMAL);
  return degreesF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
