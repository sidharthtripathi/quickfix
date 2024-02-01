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
    <div>
      <div className="flex mx-10 justify-between items-center bg-teal-500 p-4">
        <h1 className="text-white">{category.categoryName}</h1>
        <button
          onClick={addNewNote}
          className="bg-white text-teal-500 rounded-full p-2"
        >
          <strong>+</strong>
        </button>
      </div>

      {cat?.categoryNotes?.map((note) => (
        <div
          key={note.noteId}
          className="h-10 my-3 mx-2 rounded px-4 pt-1 bg-teal-500 hover:bg-teal-400"
        >
          <Link
            to={`/note/categories/${category.categoryName}/${note.noteTitle}`}
            state={{ title: note.noteTitle, block: note.noteData }}
          >
            <div className="text-white" key={Math.random()}>
              {note.noteTitle}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryNotes;
