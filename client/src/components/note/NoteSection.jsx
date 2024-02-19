import React, { useEffect } from "react";
import Categories from "./Categories";
import useFetch from "../../hooks/useFetch";
import { addSubcategoriesToStore } from "../../store/noteSlice";
import { useDispatch } from "react-redux";

const NoteSection = () => {

  const dispatch = useDispatch();
  const subCategories = useFetch('/subcategories')
  useEffect(() => {
    if (!subCategories.data) return;
    const subCategoriesData = subCategories.data?.data.data;
    console.log('subCategoriesData',subCategoriesData)
    dispatch(addSubcategoriesToStore(subCategoriesData))

  }, [subCategories?.isLoading])
  return (

    <div className="flex bg-white min-h-screen">
      <div className="flex-grow " >
        <Categories />
      </div>
    </div>
  );
};

export default NoteSection;
