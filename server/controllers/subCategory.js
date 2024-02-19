const SubCategory = require("../models/subCategory");
const Category = require("../models/category");
const { default: mongoose } = require("mongoose");

exports.createSubCategory = async (req, res) => {
  const { categoryId, subCategory } = req.body;

  const sub_category = new SubCategory({
    ...subCategory,
    categoryId: categoryId,
  });
  const response = await sub_category.save();

  const category = await Category.findOne({ _id: categoryId });
  console.log("response._id", response._id);
  await category.addSubCategoryId(response._id);

  res.status(200).json({ message: "...", success: true, data: response });
};

exports.getSubCategories = async (req, res) => {
  const subCategories = await SubCategory.find();

  res.status(200).json({ message: "...", success: true, data: subCategories });
};

exports.addNotes = async (req, res) => {
  try {
    const subCategoryId = req.params.subCategoryId;
    const notes = req.body.notes;

    const subCategory = await SubCategory.findOne({ _id: subCategoryId });

    subCategory.notes = notes;
    const response = await subCategory.save();

    res.status(200).json({
      message: "add notes to subcategory",
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getSubCategories = async (req, res) => {
  const subCategories = await SubCategory.find();
  res.status(200).json({
    message: "fetched sub categories",
    success: true,
    data: subCategories,
  });
};

exports.deleteSubCategory = async (req, res) => {
  const { subCategoryId } = req.params;

  try {
    const response = await SubCategory.findByIdAndDelete(subCategoryId);
    if (!response) {
      return res.status(404).json({
        message: "subCategory doesn't exist.",
        success: false,
        error: "subCategory Not Found!",
      });
    }
    res.status(200).json({
      message: "delete subCategory",
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
