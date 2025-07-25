const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const upload =require("../middlewares/uploadMiddleware")

const router = express.Router();

router.get('/contact',authMiddleware,adminMiddleware,adminController.contact);
router.delete(
  "/contact/delete/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteContactById
);

router.post('/notice',upload.single("image") ,authMiddleware, adminMiddleware, adminController.createNotice);
router.delete(
  '/notice/delete/:id',
  authMiddleware,
  adminMiddleware,
  adminController.deleteNoticeById
);

module.exports = router;