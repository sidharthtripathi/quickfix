const express = require("express");
const { getNotes, createCategory } = require("../controllers/category");

const router = express.Router();

router.get("/notes", getNotes);
router.post("/create-category", createCategory);
module.exports = router;
