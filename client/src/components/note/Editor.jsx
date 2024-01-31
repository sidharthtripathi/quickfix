import React from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const Editor = () => {
  const editor = useBlockNote();

  return <BlockNoteView editor={editor} theme={"light"} />;
};

export default Editor;
