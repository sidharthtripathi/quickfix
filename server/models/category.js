// categories: [
//   {
//     categoryName: "physics ",
//     categoryId: "id",
//     subCategories: [
//         subCategoryId
//     ],
//   },
// ],

//       {
//         noteTitle: "thermodynamics",
//         noteId: "noteId",
//         noteData: [{...},{...},{...}],
//       },
//       {
//         title: "motion",
//         noteId: "noteId",
//         noteData: ["block data"],
//       },
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
    subCategories: [
      {
        subCategoryName: String,
        subCategoryId: Number,
        notes: [],
      },
    ],
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

module.exports = mongoose.model("Note", noteSchema);