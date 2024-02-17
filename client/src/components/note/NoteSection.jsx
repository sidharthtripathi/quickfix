import React from "react";
import Categories from "./Categories";

const NoteSection = () => {
  return (

    <div className="flex bg-white min-h-screen">
      <div className="flex-grow " >
        <Categories />
      </div>
    </div>
  );
};

export default NoteSection;
