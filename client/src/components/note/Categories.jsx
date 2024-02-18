import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { addCategoryToStore, addingTheFetchedDataToStore } from "../../store/noteSlice";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { API } from "../../utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();


  const dataState = useFetch("/note/notes")
  useEffect(() => {
    if (!dataState.data) {
      return console.log('data not fetched yet')
    }
    setCategories(dataState.data.data.data)
    dispatch(addingTheFetchedDataToStore(dataState.data.data.data))
  }, [dataState?.isLoading])

  const addCategoryHandler = async () => {
    const categoryName = window.prompt("Category name");

    if (!categoryName || categoryName.trim() === "") return alert('category name can\'t be empty');
    if (categoryName.includes('-')) return alert("you can't add '-' in the category name")


    const newCategory = {
      categoryId: categories.length + Math.floor(Math.random() * 9000 + 1000),
      categoryName: categoryName,
    };

    try {

      await axios.post(API + '/note/create-category', newCategory)

      setCategories((prevCategories) => [newCategory, ...prevCategories]);
      dispatch(addCategoryToStore(newCategory));
    } catch (e) {
      console.log(e)
    }

  };
  return (
    <div className="flex w-full border-2 ">

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
          {categories && categories.map((category) => {
            return (
              <NavLink
                to={`/note/${category.categoryName}-${category._id}`}
                state={{ category }}
                key={category.categoryId}
                className="block py-2 px-4 my-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-green-50 hover:text-green-600 transition duration-150"
              >
                {category.categoryName}
                <button onClick={() => alert("delete")} className="mx-3 text-red-600">D</button>
              </NavLink>
            )
          })}
        </div>
      </div>
      <div className="flex-grow p-4 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};



export default Categories;
