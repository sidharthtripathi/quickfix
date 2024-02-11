import React from "react";
import NoteCategories from "./NoteCategories";

const NoteSection = () => {
  return (

    <div className="flex bg-white min-h-screen">
      <div className="flex-grow " >
        <NoteCategories />
      </div>
    </div>
  );
};

export default NoteSection;
