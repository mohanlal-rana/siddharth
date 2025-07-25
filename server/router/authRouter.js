const express = require("express");
const authControllers=require('../controllers/authController');
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", authControllers.signup);
router.post("/login", authControllers.login);
router.get('/user',authMiddleware,authControllers.user)

module.exports = router;
