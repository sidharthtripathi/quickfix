import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { addCategory } from "../../store/noteSlice";
import axios from "axios";

const NoteCategories = () => {
  //   const [categories, setCategories] = useState([
  //     {
  //       categoryId: "1",
  //       categoryName: "Physics",
  //       notes: [
  //         {
  //           noteId: "1",
  //           noteTitle: "Thermodynamics",
  //           contentBlocks: [],
  //         },
  //         {
  //           noteId: "2",
  //           noteTitle: "Quantum Mechanics",
  //           contentBlocks: [],
  //         },
  //       ],
  //     },
  //     {
  //       categoryId: "2",
  //       categoryName: "Chemistry",
  //       notes: [],
  //     },
  //   ]);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const note = useSelector((state) => state.note.notes);

  // const useEffect(()=>{

  //   const response = await axios.get('http://localhost:1200/note/notes')
  //   console.log('response', response)
  // },[])

  // console.log("selector ", note);
  const addCategoryHandler = async () => {
    const categoryName = window.prompt("Category name");

    if (!categoryName) return;
    if (categoryName.trim() === "") {
      console.log("Emtpy");
      return;
    }
    console.log('categories.length', categories.length,)
    const newCategory = {
      categoryId: categories.length + Math.floor(Math.random() * 9000 + 1000),
      categoryName: categoryName,
      categoryNotes: [],
    };

    try {

      const response = await axios.post('http://localhost:1200/note/create-category', newCategory)
      console.log('response', response)
      console.log('response')

      setCategories((prevCategories) => [newCategory, ...prevCategories]);
      dispatch(addCategory(newCategory));
      console.log("new category has been added", newCategory);
    } catch (e) { console.log(e) }

  };
  return (
    <div className="flex w-full border-2 ">
      {/* {
      JSON.stringify(note, 2, null)
    } */}

      <div className="w-1/4 h-screen p-4 border-r-2 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
          <button
            onClick={addCategoryHandler}
            className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition duration-150"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
        <div className="overflow-y-auto pr-2">
          {categories && categories.map((category) => (
            <NavLink
              to={`/note/categories/${category.categoryName}`}
              state={{ category }}
              key={category.categoryId}
              className="block py-2 px-4 my-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-green-50 hover:text-green-600 transition duration-150"
            >
              {category.categoryName}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex-grow p-4 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};



export default NoteCategories;
