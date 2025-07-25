const express = require("express");
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  authMiddleware,
  adminMiddleware,
  eventController.addEvent
);

router.get("/", eventController.getEvent);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  eventController.deleteEventById
);

module.exports = router;
