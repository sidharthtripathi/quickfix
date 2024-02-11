import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { addCategory } from "../../store/noteSlice";

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

  console.log("selector ", note);
  const addCategoryHandler = () => {
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

    setCategories((prevCategories) => [newCategory, ...prevCategories]);
    dispatch(addCategory(newCategory));
    console.log("new category has been added", newCategory);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", border: "2px solid red", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "1rem 0",
          }}
        >
          <div>NoteCategories</div>
          <button onClick={addCategoryHandler}>
            <strong>+</strong>
          </button>
        </div>
        <div>
          {categories &&
            note.map((category) => (
              <NavLink
                to={`/note/categories/${category.categoryName}`}
                state={{ category: category }}
                key={category.categoryId}
              >
                <h4
                  className={
                    "h-10 my-3 text-white mx-2 rounded px-4 pt-1 bg-green-500 hover:bg-green-400"
                  }
                >
                  {category.categoryName}
                </h4>
              </NavLink>
            ))}
        </div>
      </div>

      <div style={{ width: "80%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default NoteCategories;
