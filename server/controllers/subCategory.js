const SubCategory = require("../models/subCategory");
const Category = require("../models/category");

exports.createSubCategory = async (req, res, next) => {
  const { categoryId, subCategory } = req.body;

  if (!categoryId || !subCategory) {
    const error = new Error("CategoryId and subCategory Details are required.");
    error.statusCode = 400;
    throw error;
  }

  try {
    const sub_category = new SubCategory({
      ...subCategory,
      categoryId: categoryId,
    });
    const response = await sub_category.save();

    const category = await Category.findOne({ _id: categoryId });
    if (!category) {
      const error = new Error("Category Doesn't found!.");
      error.statusCode = 404;
      throw error;
    }

    await category.addSubCategoryId(response._id);
    res.status(201).json({
      message: "SubCategory has been created successfully",
      success: true,
      data: response,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.addNotes = async (req, res, next) => {
  const subCategoryId = req.params.subCategoryId;
  const notes = req.body.notes;

  if (!subCategoryId || !notes) {
    const error = new Error("subCategoryId and notes are required.");
    error.statusCode = 400;
    throw error;
  }
  try {
    const subCategory = await SubCategory.findOne({ _id: subCategoryId });

    if (!subCategory) {
      const error = new Error("SubCategory not found");
      error.statusCode = 404;
      throw error;
    }

    subCategory.notes = notes;
    const response = await subCategory.save();

    res.status(200).json({
      message: "add notes to subcategory",
      success: true,
      data: response,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
exports.getSubCategories = async (req, res, next) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json({
      message: "SubCategories fetched successfully",
      success: true,
      data: subCategories,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.deleteSubCategory = async (req, res) => {
  const { subCategoryId } = req.params;

  if (!subCategoryId) {
    const error = new Error("subCategoryId is required");
    error.statusCode = 400;
    throw error;
  }

  try {
    const response = await SubCategory.findByIdAndDelete(subCategoryId);

    if (!response) {
      const error = new Error("SubCategory not found");
      error.statusCode = 404;
      throw error;
    }
    const category = await Category.findOne({ subCategoryId: subCategoryId });
    await category.removeSubCategoryId(subCategoryId);

    res.status(200).json({
      message: "delete subCategory successfully.",
      success: true,
      data: response,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
