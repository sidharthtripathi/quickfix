import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { addNoteInfo } from "../../store/noteSlice";
import axios from "axios";
import { API } from "../../utils/api";

const CategoryNotes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  console.log('params',params.category.split('-')[1])

  useEffect(() => {
    
      // navigate('/note')
    
  }, [])
 
    const categoryId = params.category.split('-')[1]  

  const category = useSelector((state) => {
    return state.note.notes.find((n) => (n._id === categoryId));
  }) || {};

  const addNewNote = async () => {

    const noteTitle = window.prompt("Category name");

    if (!noteTitle) return;

    

    const noteInfo = {
      // _id : '65c8ccc016e553a5b61cc1c3',
      categoryId: category.categoryId,
      info: {
        noteTitle: noteTitle,
        noteId: Math.random(),
        noteData: [],
        // noteData: noteData,
      },
    };
    try {


      const response = await axios.patch(API + '/note/create-category-note', noteInfo)
      console.log('response', response)
      dispatch(addNoteInfo(noteInfo));
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <div className="mx-10 my-4">
      <div className="flex justify-between items-center bg-teal-500 p-4 rounded-lg shadow-md">
        <h1 className="text-xl text-white font-semibold">{category.categoryName}</h1>
        <button
          onClick={addNewNote}
          className="bg-white text-teal-500 rounded-full p-2 hover:bg-teal-100 transition duration-150"
        >
          <strong>+</strong>
        </button>
      </div>

      <div className="mt-4">
        {category && category.categoryNotes?.map((note) => (
          <Link
            key={note.noteId}
            to={`/note/${category.categoryName}-${category._id}/${note.noteTitle}-${note._id}`}
            state={{ title: note.noteTitle, categoryId: category.categoryId, noteId: note.noteId, block: note.noteData }}
            className="block my-3 mx-2 rounded-lg px-4 py-2 bg-teal-500 hover:bg-teal-400 transition duration-150 shadow"
          >
            <div className="text-white font-medium">{note.noteTitle}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNotes;