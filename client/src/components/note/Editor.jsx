import React, { useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const Editor = () => {
  const [blocks, setBlocks] = useState(null);
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      setBlocks(editor.topLevelBlocks);
      console.log(editor.topLevelBlocks);
    },
  });
  return (
    <>
      <BlockNoteView editor={editor} theme={"dark"} />
    </>
  );
};

export default Editor;
