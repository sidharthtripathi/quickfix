const Category = require("../models/category");
const SubCategory = require("../models/subCategory");
// const { deleteMany } = require("../models/subCategory");
exports.getNotes = async (req, res) => {
  const notes = await Category.find();

  if (!notes) {
    res.status(404).json({
      message: "notes does not exist",
      success: false,
    });
  }

  res.status(200).json({
    message: "Notes Fetched Successfully",
    success: true,
    data: notes,
  });
};

exports.createCategory = async (req, res) => {
  const note = new Category(req.body);
  const response = await note.save();

  res.status(201).json({ message: "created", success: true, data: response });
};

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const response = await Category.findByIdAndDelete(categoryId);

    await SubCategory.deleteMany({
      categoryId: categoryId,
    });

    if (!response) {
      return res.status(404).json({
        message: "category doesn't exist.",
        success: false,
        error: "Category Not Found!",
      });
    }
    res.status(200).json({
      message: "delete category",
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error || "Something Went Wrong!",
    });
  }
};
