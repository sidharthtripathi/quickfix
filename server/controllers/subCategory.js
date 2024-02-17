
const SubCategory = require('../models/subCategory')
const Note = require('../models/category')
exports.createSubCategory = async (req, res) => {
    const { categoryId, subCategory } = req.body;

 console.log("in subcategory controller")

    const sub_category = new SubCategory({...subCategory,categoryId : categoryId})
    const response = await sub_category.save();

    console.log('categoryId', categoryId)
    const category = await Note.findOne({_id: categoryId})
    console.log('category', category)
    await category.addSubCategoryId(response._id)

    res.status(200).json({ message: "...", success: true, data: response });
  };