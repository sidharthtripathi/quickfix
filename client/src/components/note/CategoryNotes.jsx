import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addNoteInfo } from "../../store/noteSlice";

const CategoryNotes = ({}) => {
  // const {category} = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { category } = location.state;
  //   console.log(category);

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
    const noteInfo = {
      categoryId: category.categoryId,
      info: {
        noteTitle: noteTitle,
        noteId: Math.random(),
        noteData: [],
      },
    };
    dispatch(addNoteInfo(noteInfo));
  };
  return (
    <div>
      <div className={"flex mx-10"} style={{ justifyContent: "space-between" }}>
        <h1>{category.categoryName}</h1>
        <button onClick={addNewNote}>
          <strong>+</strong>
        </button>
      </div>
      {category.notes.map((note) => (
        <div key={Math.random()}>
          <Link
            to={`/note/categories/${category.categoryName}/${note.noteTitle}`}
            state={{ title: note.noteTitle, notes: notes }}
          >
            {note.noteTitle}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryNotes;
