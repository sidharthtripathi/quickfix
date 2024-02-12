const Note = require("../models/note");
exports.getNotes = async (req, res) => {
  const notes = await Note.find();

  if (!notes) {
    res.status(404).json({
      message: "notes does not exist",
      success: false,
    });
  }

  res.status(200).json({ message: "Notes Fetched Successfully",success: true, data: notes });
};
exports.createCategory = async (req, res) => {
  const note = new Note(req.body);
  const response = await note.save();

  res.status(201).json({ message: "created", success: true, data: response });
};

exports.createCategoryNote = async (req, res) => {
  const { categoryId, info } = req.body;
  const note = await Note.findOne({ categoryId: categoryId });

  if (!note) {
    console.log("cattegory not found");
    res.status(404).json({ message: "category not found.", success: false });
  }
  console.log("notes", note);
  note.categoryNotes.push(info);
  const response = await note.save();
  res.status(200).json({ message: "...", success: true, data: response });
};
