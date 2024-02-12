const express = require('express');
const { getNotes,createCategory ,createCategoryNote} = require('../controllers/note');

const router = express.Router();

router.get('/notes', getNotes)
router.post('/create-category', createCategory)
router.patch('/create-category-note', createCategoryNote)
// router.post('/',addNotes)

module.exports = router;