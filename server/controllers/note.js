const Note = require("../models/note");
exports.getNotes = async (req, res) => {
  const notes = await Note.find();

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
  const note = new Note(req.body);
  const response = await note.save();

  res.status(201).json({ message: "created", success: true, data: response });
};

exports.createSubCategory = async (req, res) => {
  const { categoryId, subCategory } = req.body;
  const note = await Note.findOne({ categoryId: categoryId });

  if (!note) {
    console.log("cattegory not found");
    return res
      .status(404)
      .json({ message: "category not found.", success: false });
  }
  console.log("notes", note);
  note.subCategories.push(subCategory);
  const response = await note.save();
  res.status(200).json({ message: "...", success: true, data: response });
};

// exports.postNote = async (req, res) => {
//   const { categoryId, noteId, noteData } = req.body;
//   const categories = await Note.findOne({ categoryId: categoryId });

//   const noteIdx = categories.categoryNotes.findIndex(
//     (c) => c.noteId === noteId
//   );

//   if (!categories.categoryNotes[noteIdx]) {
//     console.log("cattegory not found");
//     return res
//       .status(404)
//       .json({ message: "category not found.", success: false });
//   }
//   categories.categoryNotes[noteIdx].noteData = noteData;
//   const response = await categories.save();
//   res.status(200).json({ message: "...", success: true, data: response });
// };

exports.postNote = async (req, res) => {
    try {
      const { categoryId, noteId, noteData } = req.body;
  
      // Validate input parameters
      if (!categoryId || !noteId || !noteData) {
        return res.status(400).json({ message: "Invalid input data", success: false });
      }
  
      // Update the note directly in the database
      const updatedNote = await Note.findOneAndUpdate(
        { categoryId: categoryId, "subCategories.noteId": noteId },
        { $set: { "subCategories.$.noteData": noteData } },
        { new: true }
      );
  
      if (!updatedNote) {
        return res.status(404).json({ message: "Category or note not found", success: false });
      }
  
      // Return success response
      res.status(200).json({ message: "Note updated successfully", success: true, data: updatedNote });
    } catch (error) {
      console.error("Error updating note:", error);
      res.status(500).json({ message: "Internal server error", success: false });
    }
  };
  