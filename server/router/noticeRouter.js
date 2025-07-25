const express = require('express');
const { notice } = require('../controllers/noticeController');

const router = express.Router();

router.get('/',notice);

module.exports=router