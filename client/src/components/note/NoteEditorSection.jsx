import React from "react";
import Editor from "./Editor";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NoteEditorSection = () => {


  const { category: categoryParam, topic: topicParam } = useParams();
  const categoryId = categoryParam.split('-')[1]
  const subCategoryId = topicParam.split('-')[1]

  const categoryObj = useSelector((state) => {
    return state.note.notes.find((n) => (n._id === categoryId));
  }) || {};

  // const topicObj = categoryObj.subCategories?.find(n => n._id === subCategoryId)
  const topicObj = categoryObj.subCategories?.find(n => n._id === subCategoryId)
  console.log('categoryObj',)
  console.log('topicObj',topicObj)
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h5 className="text-2xl font-bold text-green-500 border-b border-green-400 p-3 m-3 rounded-md flex justify-center shadow">
        {topicObj?.subCategoryName}
      </h5>
      {/* {topicObj && <Editor categoryObj={categoryObj} topicObj={topicObj} />} */}
      { <Editor categoryObj={categoryObj} topicObj={topicObj} />}
    </div>
  );
};

export default NoteEditorSection;
