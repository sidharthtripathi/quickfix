const express = require('express');
const { getNotes,createCategory , postNote, createSubCategory} = require('../controllers/note');

const router = express.Router();

router.get('/notes', getNotes)
router.post('/create-category', createCategory)
router.patch('/create-category-note', createSubCategory)
router.post('/add-note', postNote)

module.exports = router;