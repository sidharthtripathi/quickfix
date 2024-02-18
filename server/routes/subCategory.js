const express = require('express');
const { createSubCategory, getSubCategories } = require('../controllers/subCategory');

const router = express.Router();


router.post('/sub', createSubCategory)
router.get
('/subcategories/:categoryId', getSubCategories)

module.exports = router;