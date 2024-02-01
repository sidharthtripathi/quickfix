import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useLocation } from "react-router-dom";

const Editor = () => {
  const [blocks, setBlocks] = useState(null);
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      setBlocks(editor.topLevelBlocks);
      console.log(editor.topLevelBlocks);
    },
  });

  const location = useLocation();

  let block = null;
  if (location.state && location.state.block) {
    block = location.state.block;
  }

  useEffect(() => {
    if (!block) {
      console.log("not", block);
      return;
    }
    console.log("inserting", block);

    editor.insertBlocks(
      block,
      //   editor.getTextCursorPosition().block,
      "initialBlockId",
      "after"
    );
  }, []);

  return (
    <>
      <BlockNoteView editor={editor} theme={"dark"} />
      <pre> {JSON.stringify(blocks, null, 2)} </pre>
    </>
  );
};

export default Editor;
