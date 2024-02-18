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
  topicObj2,
 }) => {
  const [blocks, setBlocks] = useState(null);

  const dispatch = useDispatch();
// console.log('topicObj2',topicObj2)

  useEffect(() => {


    if (!categoryObj || !topicObj2) return console.log('data....', categoryObj)
    dispatch(
      addNote({
        categoryId: categoryObj.categoryId,
        subCategoryId: topicObj2._id,
        notes: topicObj2.notes,
      })
    );
  }, []);


  const editor = useBlockNote({
    // using this to add file uploader
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,

    onEditorContentChange: (editor) => {

      setBlocks(editor?.topLevelBlocks);

      if (!topicObj2 || categoryObj) return
      dispatch(
        addNote({
          categoryId: categoryObj.categoryId,
          subCategoryId: topicObj2.subCategoryId,
          notes: editor.topLevelBlocks,
        })
      );
    },
  });
  useEffect(() => {
    if (!topicObj2?.notes) {
      return;
    }


    editor.insertBlocks(
      // block,
      topicObj2.notes,
      //   editor.getTextCursorPosition().block,
      "initialBlockId",
      "after"
    );
  }, []);

  const saveNoteHandler = async () => {


    alert("your note has been saved")

    // const dataToPost = {
    //   categoryId: categoryObj.categoryId,
    //   subCategoryId: topicObj2.subCategoryId,
    //   notes: blocks
    // }
// console.log('topicObj2._id', topicObj2)
    try {
      // const response = await axios.post(API + '/note/add-note', dataToPost)
      const r = await axios.patch(API + '/add-notes/' + topicObj2._id, {notes : blocks})
      console.log('response added notes in subcategory', r)
    } catch (error) {
      // console.log('2.subCategoryId',topicObj2._id)
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
