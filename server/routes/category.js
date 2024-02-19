const express = require("express");
const { getNotes, createCategory, deleteCategory } = require("../controllers/category");

const router = express.Router();

router.get("/notes", getNotes);
router.post("/create-category", createCategory);
router.delete("/delete-category/:categoryId",deleteCategory)
module.exports = router;
