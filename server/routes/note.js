const express = require('express');
const { getNotes,createCategory ,createCategoryNote, postNote} = require('../controllers/note');

const router = express.Router();

router.get('/notes', getNotes)
router.post('/create-category', createCategory)
router.patch('/create-category-note', createCategoryNote)
router.post('/add-note', postNote)
// router.post('/',addNotes)

module.exports = router;