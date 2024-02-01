import React from "react";
import Editor from "./Editor";
import { useLocation } from "react-router-dom";

const NoteEditorSection = () => {
  const location = useLocation();
  const data = location?.state;
  console.log(data);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h5 className="text-2xl font-bold text-green-500 border-b border-green-400 p-3 m-3 rounded-md flex justify-center shadow">
        {data?.title}
      </h5>{" "}
      <Editor />
    </div>
  );
};

export default NoteEditorSection;
