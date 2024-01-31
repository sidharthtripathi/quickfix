import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const b = [
  {
    id: "e0911c50-b4eb-47f2-b6ca-0a2e3f5bfa7d",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [{ type: "text", text: "Ikram Bagban", styles: {} }],
    children: [],
  },
  {
    id: "9db1cf64-a842-4896-a817-2e7efee627ec",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [{ type: "text", text: "hii", styles: {} }],
    children: [],
  },
  {
    id: "0fe7a5ba-049e-4cbd-b5b5-0857f5bf7107",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [],
    children: [],
  },
];

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

    // editor.insertBlocks(b,editor.topLevelBlocks, "before")
  }, []);
  return (
    <>
      <BlockNoteView editor={editor} theme={"dark"} />
      <pre> {JSON.stringify(blocks)} </pre>
    </>
  );
};

export default Editor;
