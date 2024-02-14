import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/noteSlice";
import axios from "axios";

const Editor = () => {
  const [blocks, setBlocks] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location?.state;

  let block;
  if (location.state && location.state.block) {
    block = location.state.block;
  }

  useEffect(() => {
    dispatch(
      addNote({
        categoryId: data.categoryId,
        noteId: data.noteId,
        note: data.block,
      })
    );

    console.log('in effect')
  }, []);

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      console.log('inside oneditcontetn change ')
      setBlocks(editor?.topLevelBlocks);

      dispatch(
        addNote({
          categoryId: data.categoryId,
          noteId: data.noteId,
          note: editor.topLevelBlocks,
        })
      );
    },
  });
  useEffect(() => {
    console.log('-------------------------------------', editor)
    if (!block) {
      console.log("not", block);
      return;
    }

    console.log('block ', block)

    editor.insertBlocks(
      block,
      //   editor.getTextCursorPosition().block,
      "initialBlockId",
      "after"
    );
  }, []);

  const saveNoteHandler = async () => {


    alert("you'r note has been saved")

    const dataToPost = {
      categoryId: data.categoryId,
      noteId: data.noteId,
      noteData : blocks
    }

    const response = await axios.post('http://localhost:1200/note/add-note',dataToPost)
    console.log(response.data)

    console.log(blocks)
  }

  return (
    <>
      <div>
        <button onClick={saveNoteHandler} className="m-3 p-2 border rounded bg-green-500 text-white">save note</button>
        <BlockNoteView editor={editor} theme={"light"}></BlockNoteView>
        <pre>{JSON.stringify(blocks, null, 2)}</pre>
      </div>
    </>
  );
};

export default Editor;
