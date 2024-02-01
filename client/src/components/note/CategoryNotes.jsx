import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addNoteInfo } from "../../store/noteSlice";

const CategoryNotes = ({}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  //   const [isAdding, setIsAdding] = useState(false);
  //   const [noteTitle, setoteTitle] = useState("");
  const { category } = location.state;

  const cat = useSelector((state) => {
    return state.note.notes.find((n) => n.categoryId === category.categoryId);
  });

  const notes = [
    {
      id: "860c9c6b-bb82-4176-b750-caed46a89f3f",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [{ type: "text", text: "First line", styles: {} }],
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
      content: [{ type: "text", text: "Ikram Bagban ", styles: {} }],
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

  const addNewNote = () => {
    const noteTitle = window.prompt("Category name");
    // console.log('category.categoryId',category.categoryId)
    const noteInfo = {
      categoryId: category.categoryId,
      info: {
        noteTitle: noteTitle,
        noteId: Math.random(),
        noteData: [],
      },
    };
    dispatch(addNoteInfo(noteInfo));
    // setIsAdding(!isAdding)
  };
  return (
    <div>
      <div className={"flex mx-10"} style={{ justifyContent: "space-between" }}>
        <h1>{category.categoryName}</h1>
        {/* <button onClick={() => setIsAdding(!isAdding)}>
          <strong>{isAdding ? "-" : "+"}</strong>
        </button> */}
        <button onClick={addNewNote}>
          <strong>+</strong>
        </button>
      </div>
      {/* {isAdding ? (
        <>
          <input
            className="border rounded "
            value={noteTitle}
            onChange={(e) => setoteTitle(e.target.value)}
          />
          <button
            className="btn border rounded bg-slate-500"
            onClick={addNewNote}
          >
            add
          </button>
        </>
      ) : null} */}
      {cat?.categoryNotes?.map((note) => (
        <div className="h-10 my-3 mx-2 rounded px-4 pt-1 bg-green-500">
          <Link
            to={`/note/categories/${category.categoryName}/${note.noteTitle}`}
            state={{ title: note.noteTitle }}
          >
            <div className="text-white " key={Math.random()}>
              {note.noteTitle}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryNotes;
