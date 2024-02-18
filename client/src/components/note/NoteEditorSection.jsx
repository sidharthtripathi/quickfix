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
  // const subCategories = useSelector((state) => {
  //   return state.note.subCategories
  //   // .find((subCategory)=> subCategory.categoryId === categoryId )
  // }) || [];

  // console.log('==========', subCategoryId, '==========')

  const topicObj = categoryObj.subCategories?.find(n => n._id === subCategoryId)
  const topicObj2 = useSelector((state) => {
    return state.note.subCategories.find(e => e._id === subCategoryId)
  }) || {};
  // console.log('obj 2 ', topicObj2)
  // console.log('obj ', topicObj)

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h5 className="text-2xl font-bold text-green-500 border-b border-green-400 p-3 m-3 rounded-md flex justify-center shadow">
        {topicObj?.subCategoryName}
      </h5>
      {topicObj && <Editor categoryObj={categoryObj} topicObj={topicObj} topicObj2={topicObj2}/>}
      {/* { <Editor categoryObj={categoryObj} topicObj={topicObj} />} */}
    </div>
  );
};

export default NoteEditorSection;
