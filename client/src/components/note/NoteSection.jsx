import React from "react";
import Editor from "./Editor";
import NoteCategories from "./NoteCategories";

const NoteSection = () => {
  return (
    <div style={{ background: "white", display: "flex" }}>
      <div
        style={{
          background: "white",
          height: "100vh",
          width: "20%",
          border: "2px solid green",
        }}
      >
        <NoteCategories />
      </div>
      <div style={{ width: "80%" }}>
        <Editor />
      </div>
    </div>
  );
};

export default NoteSection;
