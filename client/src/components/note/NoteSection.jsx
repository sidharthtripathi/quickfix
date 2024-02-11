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
          width: "100%",
          border: "2px solid green",
        }}
      >
        <NoteCategories />
      </div>
    </div>
  );
};

export default NoteSection;
