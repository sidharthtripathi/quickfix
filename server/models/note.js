// notes: [
//   {
//     categoryName: "physics ",
//     categoryId: "id",
//     categoryNotes: [
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
//     ],
//   },
// ],

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    require: true,
  },
  categoryId: {
    type: Number,
    require: true,
  },
  categoryNotes: [
    {
      noteTitle: String,
      noteId: Number,
      noteData: [], 
    },
  ],
},{ minimize: false });

module.exports = mongoose.model("Note", noteSchema);
