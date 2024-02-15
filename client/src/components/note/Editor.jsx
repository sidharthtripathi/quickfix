import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/noteSlice";
import axios from "axios";
import { uploadToTmpFilesDotOrg_DEV_ONLY } from "@blocknote/core";
import { API } from "../../utils/api";

const Editor = () => {
  const [blocks, setBlocks] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  // const data = location.state || {};

  const {category :categoryParam, topic : topicParam} = useParams();
  // console.log('params editor',params)
  let block;
  if (location.state && location.state.block) {
    block = location.state.block;
  }
  const categoryId = categoryParam.split('-')[1]
  const noteId = topicParam.split('-')[1]
  // console.log(categoryId + "----" + noteId)
  const categoryObj = useSelector((state) => {
    return state.note.notes.find((n) => (n._id === categoryId ));
  }) || {};

  const topicObj = categoryObj.categoryNotes?.find(n=> n._id === noteId)

  // console.log('category filtered note' ,categoryObj)
  // console.log('topicObj filtered note' ,topicObj)
  useEffect(() => {
   
    if(!categoryObj) return  console.log('data....',categoryObj)
    dispatch(
      addNote({
        categoryId: categoryObj.categoryId,
        noteId: topicObj.noteId,
        note: topicObj.noteData,
      })
    );
    // console.log('data after....',data)
  }, []);

  const editor = useBlockNote({
    // using this to add file uploader
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,

    onEditorContentChange: (editor) => {

      setBlocks(editor?.topLevelBlocks);

      // if(!cate) return
      dispatch(
        addNote({
          // categoryId: data.categoryId,
          // noteId: data.noteId,
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
      // categoryId: data.categoryId,
      // noteId: data.noteId,
      categoryId: categoryObj.categoryId,
        noteId: topicObj.noteId,
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
