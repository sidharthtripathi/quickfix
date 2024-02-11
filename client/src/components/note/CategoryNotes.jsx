import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addNoteInfo } from "../../store/noteSlice";

const CategoryNotes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { category } = location.state;

  const cat = useSelector((state) => {
    return state.note.notes.find((n) => n.categoryId === category.categoryId);
  });

  const addNewNote = () => {
    const noteTitle = window.prompt("Category name");

    if (!noteTitle) return;

    const noteData = [
      {
        id: "860c9c6b-bb82-4176-b750-caed46a89f3f",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          { type: "text", text: `Let's talk about ${noteTitle}`, styles: {} },
        ],
        children: [],
      },
      {
        id: "e9ceb019-66ba-4fea-80d6-fe0ec1852179",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
      {
        id: "fb6ca118-74f3-43fe-8fdb-f8ff40824458",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [{ type: "text", text: "this is  " + noteTitle, styles: {} }],
        children: [],
      },
      {
        id: "a9a62201-3f0c-44b0-92b7-499b40aa72ea",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
      {
        id: "2ee08933-bd37-4d3b-be9d-a1f132b231a8",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
      {
        id: "7d70f294-f201-42cd-a934-4416b7296b92",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ];

    const noteInfo = {
      categoryId: category.categoryId,
      info: {
        noteTitle: noteTitle,
        noteId: Math.random(),
        // noteData: [],
        noteData: noteData,
      },
    };
    dispatch(addNoteInfo(noteInfo));
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
        {cat?.categoryNotes?.map((note) => (
          <Link
            key={note.noteId}
            to={`/note/categories/${category.categoryName}/${note.noteTitle}`}
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