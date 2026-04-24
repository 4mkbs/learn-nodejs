function convertLength(value, fromUnit, toUnit) {
  let meters;

  switch (fromUnit) {
    case "mm":
      meters = value / 1000;
      break;
    case "cm":
      meters = value / 100;
      break;
    case "m":
      meters = value;
      break;
    case "km":
      meters = value * 1000;
      break;
    case "inch":
      meters = value * 0.0254;
      break;
    case "foot":
      meters = value * 0.3048;
      break;
    case "yard":
      meters = value * 0.9144;
      break;
    case "mile":
      meters = value * 1609.34;
      break;
    default:
      meters = NaN;
  }

  let result;

  switch (toUnit) {
    case "mm":
      result = meters * 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "inch":
      result = meters / 0.0254;
      break;
    case "foot":
      result = meters / 0.3048;
      break;
    case "yard":
      result = meters / 0.9144;
      break;
    case "mile":
      result = meters / 1609.34;
      break;
    default:
      result = NaN;
  }

  return Number.isNaN(result) ? null : result.toFixed(4);
}

function convertWeight(value, fromUnit, toUnit) {
  let grams;

  switch (fromUnit) {
    case "mg":
      grams = value / 1000;
      break;
    case "g":
      grams = value;
      break;
    case "kg":
      grams = value * 1000;
      break;
    case "oz":
      grams = value * 28.3495;
      break;
    case "lb":
      grams = value * 453.592;
      break;
    default:
      grams = NaN;
  }

  let result;

  switch (toUnit) {
    case "mg":
      result = grams * 1000;
      break;
    case "g":
      result = grams;
      break;
    case "kg":
      result = grams / 1000;
      break;
    case "oz":
      result = grams / 28.3495;
      break;
    case "lb":
      result = grams / 453.592;
      break;
    default:
      result = NaN;
  }

  return Number.isNaN(result) ? null : result.toFixed(4);
}

function convertTemperature(value, fromUnit, toUnit) {
  let celsius;

  if (fromUnit === "C") {
    celsius = value;
  } else if (fromUnit === "F") {
    celsius = ((value - 32) * 5) / 9;
  } else if (fromUnit === "K") {
    celsius = value - 273.15;
  } else {
    celsius = NaN;
  }

  let result;

  if (toUnit === "C") {
    result = celsius;
  } else if (toUnit === "F") {
    result = (celsius * 9) / 5 + 32;
  } else if (toUnit === "K") {
    result = celsius + 273.15;
  } else {
    result = NaN;
  }

  return Number.isNaN(result) ? null : result.toFixed(2);
}

module.exports = {
  convertLength,
  convertWeight,
  convertTemperature,
};
