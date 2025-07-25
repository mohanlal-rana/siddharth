const express = require("express");
const contactController = require("../controllers/contactController");
const validate  = require("../middlewares/validateMiddleware");
const validator = require("../validators/contactValidator");
const router = express.Router();

router.post(
  "/contact",
  validate(validator.contactSchema),
  contactController.contact
);

module.exports = router;
