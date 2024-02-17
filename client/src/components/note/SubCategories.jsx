import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addSubCategoryToStore } from "../../store/noteSlice";
import axios from "axios";
import { API } from "../../utils/api";

const SubCategories = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const categoryId = params.category.split('-')[1]

  const category = useSelector((state) => {
    return state.note.notes.find((n) => (n._id === categoryId));
  }) || {};

  const addSubCategory = async () => {

    const subCategoryTitle = window.prompt("sub Category");

    if (!subCategoryTitle) return;

    const subCategory = {
      categoryId: category._id,
      subCategory: {
        subCategoryName: subCategoryTitle,
        subCategoryId: Math.random(),
        notes: [],
      },
    };
    try {


      const response = await axios.patch(API + '/note/create-category-note', subCategory)
      const r = await axios.post  (API + '/sub', subCategory)
      console.log('response', response)
      console.log('r', r)
      dispatch(addSubCategoryToStore(subCategory));
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <div className="mx-10 my-4">
      <div className="flex justify-between items-center bg-teal-500 p-4 rounded-lg shadow-md">
        <h1 className="text-xl text-white font-semibold">{category.categoryName}</h1>
        <button
          onClick={addSubCategory}
          className="bg-white text-teal-500 rounded-full p-2 hover:bg-teal-100 transition duration-150"
        >
          <strong>+</strong>
        </button>
      </div>

      <div className="mt-4">
        {category && category.subCategories?.map((subCategory) => (
          <Link
            key={subCategory.noteId}
            to={`/note/${category.categoryName}-${category._id}/${subCategory.subCategoryName}-${subCategory._id}`}
            // state={{ title: note.noteTitle, categoryId: category.categoryId, noteId: note.noteId, block: note.noteData }}
            className="block my-3 mx-2 rounded-lg px-4 py-2 bg-teal-500 hover:bg-teal-400 transition duration-150 shadow"
          >
            <div className="text-white font-medium">{subCategory.subCategoryName}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategories;