import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/noteSlice";

const Editor = () => {
  const [blocks, setBlocks] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location?.state;

  let block = null;
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
    onEditorContentChange: (editor) => {
      setBlocks(editor.topLevelBlocks);

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
      console.log("not", block);
      return;
    }

    editor.insertBlocks(
      block,
      //   editor.getTextCursorPosition().block,
      "initialBlockId",
      "after"
    );
  }, []);

  return (
    <>
      <BlockNoteView editor={editor} theme={"red"}></BlockNoteView>
    </>
  );
};

export default Editor;