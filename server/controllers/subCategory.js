const SubCategory = require("../models/subCategory");
const Note = require("../models/category");
exports.createSubCategory = async (req, res) => {
  const { categoryId, subCategory } = req.body;

  console.log("in subcategory controller");

  const sub_category = new SubCategory({
    ...subCategory,
    categoryId: categoryId,
  });
  const response = await sub_category.save();

  const category = await Note.findOne({ _id: categoryId });
  await category.addSubCategoryId(response._id);

  res.status(200).json({ message: "...", success: true, data: response });
};

exports.getSubCategories = async (req, res) => {
  const { categoryId } = req.params;

  console.log("in subcategory controller");
  console.log("in subcategory controller", categoryId);
  const category = await Note.findById(categoryId).select('categoryName');
  const SubCategories = await SubCategory.find({ categoryId: categoryId });

  res.status(200).json({ message: "...", success: true, data: {SubCategories,category} });
};
