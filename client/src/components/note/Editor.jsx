import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";


const Editor = ({ block }) => {
  const [blocks, setBlocks] = useState(null);
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      setBlocks(editor.topLevelBlocks);
      console.log(editor.topLevelBlocks);
    },
  });

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
      <BlockNoteView editor={editor} theme={"light"} />
      <pre> {JSON.stringify(blocks, null, 2)} </pre>
    </>
  );
};

export default Editor;
