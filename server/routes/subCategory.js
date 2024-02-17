const express = require('express');
const { createSubCategory } = require('../controllers/subCategory');

const router = express.Router();


router.post('/sub', createSubCategory)

module.exports = router;