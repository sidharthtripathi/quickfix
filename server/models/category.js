// categories: [
//   {
//     categoryName: "physics ",
//     categoryId: "id",
//     subCategoryId: [
//         ...subCategoryId
//     ],
//   },
// ],
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      require: true,
    },
    categoryId: {
      type: Number,
      require: true,
    },
    subCategoryId: [
      {
        ref: "SubCategory",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  { minimize: false }
);


noteSchema.methods.addSubCategoryId = function (subCategoryId) {
  this.subCategoryId.push(subCategoryId);
  return this.save();
};

module.exports = mongoose.model("Category", noteSchema);