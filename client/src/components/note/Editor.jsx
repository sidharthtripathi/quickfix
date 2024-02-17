import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/noteSlice";
import axios from "axios";
import { uploadToTmpFilesDotOrg_DEV_ONLY } from "@blocknote/core";
import { API } from "../../utils/api";

const Editor = ({
  categoryObj,
  topicObj, }) => {
  const [blocks, setBlocks] = useState(null);

  const dispatch = useDispatch();


  useEffect(() => {


    if (!categoryObj || !topicObj) return console.log('data....', categoryObj)
    dispatch(
      addNote({
        categoryId: categoryObj.categoryId,
        noteId: topicObj.noteId,
        note: topicObj.noteData,
      })
    );
  }, []);


  const editor = useBlockNote({
    // using this to add file uploader
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,

    onEditorContentChange: (editor) => {

      setBlocks(editor?.topLevelBlocks);

      if (!topicObj || categoryObj) return
      dispatch(
        addNote({
          categoryId: categoryObj.categoryId,
          noteId: topicObj.noteId,
          note: editor.topLevelBlocks,
        })
      );
    },
  });
  useEffect(() => {
    if (!topicObj?.noteData) {
      return;
    }


    editor.insertBlocks(
      // block,
      topicObj.noteData,
      //   editor.getTextCursorPosition().block,
      "initialBlockId",
      "after"
    );
  }, []);

  const saveNoteHandler = async () => {


    alert("your note has been saved")

    const dataToPost = {
      categoryId: categoryObj.categoryId,
      noteId: topicObj.noteId,
      noteData: blocks
    }

    try {
      const response = await axios.post(API + '/note/add-note', dataToPost)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
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
