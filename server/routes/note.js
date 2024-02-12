const express = require('express');
const { createCategory ,createCategoryNote} = require('../controllers/note');

const router = express.Router();

router.post('/create-category', createCategory)
router.patch('/create-category-note', createCategoryNote)
// router.post('/',addNotes)

module.exports = router;