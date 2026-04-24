const express = require("express");
const {
  renderHome,
  showLengthForm,
  showWeightForm,
  showTemperatureForm,
  convertLengthHandler,
  convertWeightHandler,
  convertTemperatureHandler,
} = require("../controllers/converterController");

const router = express.Router();

router.get("/", renderHome);

router.route("/length").get(showLengthForm).post(convertLengthHandler);
router.route("/weight").get(showWeightForm).post(convertWeightHandler);
router
  .route("/temperature")
  .get(showTemperatureForm)
  .post(convertTemperatureHandler);

module.exports = router;
