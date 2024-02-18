const express = require("express");
const {
  createSubCategory,
  getSubCategories,
  addNotes,
} = require("../controllers/subCategory");

const router = express.Router();

router.post("/sub", createSubCategory);
router.patch("/add-notes/:subCategoryId", addNotes);
router.get("/subcategories", getSubCategories);

module.exports = router;
