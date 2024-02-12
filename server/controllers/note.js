const Note = require("../models/note");
exports.createCategory = async (req, res) => {
  const note = new Note(req.body);
  const response  =await note.save();

  res.status(201).json({ message: "created", data: response });
};

exports.createCategoryNote = async (req, res) => {
    const {categoryId, info} = req.body
  const note =  await Note.findOne({categoryId : categoryId});
  
  
  if(!note){
    console.log('cattegory note found')
    res.json({message : "category not found."})
  }
console.log('notes', note)
  note.categoryNotes.push(info)
  const response = await note.save()
  res.status(200).json({ message: "...", data: response });
};

