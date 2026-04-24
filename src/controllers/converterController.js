const units = require("../constants/units");
const {
  convertLength,
  convertWeight,
  convertTemperature,
} = require("../utils/converters");

function renderPage(res, type, form = {}, result = null, error = null) {
  return res.render("converter", {
    type,
    units: units[type],
    form,
    result,
    error,
  });
}

function renderHome(req, res) {
  return res.render("home");
}

function showLengthForm(req, res) {
  return renderPage(res, "length");
}

function showWeightForm(req, res) {
  return renderPage(res, "weight");
}

function showTemperatureForm(req, res) {
  return renderPage(res, "temperature");
}

function parseInput(body) {
  const value = Number.parseFloat(body.value);

  return {
    value,
    rawValue: body.value,
    fromUnit: body.fromUnit,
    toUnit: body.toUnit,
  };
}

function convertLengthHandler(req, res) {
  const input = parseInput(req.body);

  if (Number.isNaN(input.value)) {
    return renderPage(
      res,
      "length",
      req.body,
      null,
      "Please enter a valid number."
    );
  }

  const convertedValue = convertLength(
    input.value,
    input.fromUnit,
    input.toUnit
  );

  if (convertedValue === null) {
    return renderPage(res, "length", req.body, null, "Invalid unit selection.");
  }

  return renderPage(res, "length", req.body, {
    inputValue: input.rawValue,
    fromUnit: input.fromUnit,
    toUnit: input.toUnit,
    convertedValue,
  });
}

function convertWeightHandler(req, res) {
  const input = parseInput(req.body);

  if (Number.isNaN(input.value)) {
    return renderPage(
      res,
      "weight",
      req.body,
      null,
      "Please enter a valid number."
    );
  }

  const convertedValue = convertWeight(
    input.value,
    input.fromUnit,
    input.toUnit
  );

  if (convertedValue === null) {
    return renderPage(res, "weight", req.body, null, "Invalid unit selection.");
  }

  return renderPage(res, "weight", req.body, {
    inputValue: input.rawValue,
    fromUnit: input.fromUnit,
    toUnit: input.toUnit,
    convertedValue,
  });
}

function convertTemperatureHandler(req, res) {
  const input = parseInput(req.body);

  if (Number.isNaN(input.value)) {
    return renderPage(
      res,
      "temperature",
      req.body,
      null,
      "Please enter a valid number."
    );
  }

  const convertedValue = convertTemperature(
    input.value,
    input.fromUnit,
    input.toUnit
  );

  if (convertedValue === null) {
    return renderPage(
      res,
      "temperature",
      req.body,
      null,
      "Invalid unit selection."
    );
  }

  return renderPage(res, "temperature", req.body, {
    inputValue: input.rawValue,
    fromUnit: input.fromUnit,
    toUnit: input.toUnit,
    convertedValue,
  });
}

module.exports = {
  renderHome,
  showLengthForm,
  showWeightForm,
  showTemperatureForm,
  convertLengthHandler,
  convertWeightHandler,
  convertTemperatureHandler,
};
