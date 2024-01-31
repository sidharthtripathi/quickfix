import React, { useState } from "react";

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

  return (
    <div>
      <div>NoteCategories</div>
      <div>
        {categories.map((category) => (
          <div key={category._id}>
            <h4>{category.category}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteCategories;
