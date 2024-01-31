import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { addCategory } from "../../store/noteSlice";

const NoteCategories = () => {
  const [categories, setCategories] = useState([
    {
      _id: 1,
      category: "Physics",
      notes: ["Thermodynamics", "Quantum Mechanics"],
    },
    {
      _id: 2,
      category: "Chemistry",
      notes: ["Organic Chemistry", "Periodic Table"],
    },
    { _id: 3, category: "Mathematics", notes: ["Calculus", "Algebra"] },
    { _id: 4, category: "Biology", notes: ["Cell Biology", "Genetics"] },
  ]);

  const dispatch = useDispatch();
  const note = useSelector(state => state.note.categories)

  console.log("selector ", note)
  const addCategoryHandler = () => {
    const category = window.prompt("Category name");

    if (!category) return;
    if (category.trim() === "") {
      console.log("Emtpy");
      return;
    }

    const newCategory = {
      _id: categories.length + 1,
      category: category,
      notes: [],
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
          {categories.map((category) => (
            <NavLink
              to={`/note/categories/${category.category}`}
              state={{ category: category }}
              key={category._id}
            >
              <h4>{category.category}</h4>
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
