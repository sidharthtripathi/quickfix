import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/noteSlice";
import axios from "axios";
import { uploadToTmpFilesDotOrg_DEV_ONLY } from "@blocknote/core";
import { API } from "../../utils/api";

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

  }, []);

  const editor = useBlockNote({
    // using this to add file uploader
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,

    onEditorContentChange: (editor) => {
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
    if (!block) {
      return;
    }

    editor.insertBlocks(
      block,
      //   editor.getTextCursorPosition().block,
      "initialBlockId",
      "after"
    );
  }, []);

  const saveNoteHandler = async () => {


    alert("your note has been saved")

    const dataToPost = {
      categoryId: data.categoryId,
      noteId: data.noteId,
      noteData: blocks
    }

    const response = await axios.post(API + '/note/add-note', dataToPost)
  }

  return (
    <>
      <div>
        <button onClick={saveNoteHandler} className="m-3 p-2 border rounded bg-green-500 text-white">save note</button>
        <BlockNoteView editor={editor} theme={"light"}></BlockNoteView>
      </div>
    </>
  );
};

export default Editor;
