import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    categories: [],
    subCategories : []

    // notes: [
    //   {
    //     categoryName: "physics ",
    //     categoryId: "id",
    //     subCategories: [
    //       {
    //         _noteTitle: "thermodynamics",
    //         _noteId: "subCategoryId",
    //         _noteData: [{...},{...},{...}],
    //       },
// ==
    //     ],
    //   },
    // ],
    // notes: [
    //   {
    //     categoryName: "physics ",
    //     categoryId: "id",
    //     subCategories: [
    //       {
    //         subCategoryName: "thermodynamics",
    //         subCategoryId: "subCategoryId",
    //         notes: [{...},{...},{...}],
    //       },
  
    //     ],
    //   },
    // ],
  },

  reducers: {
    addingTheFetchedDataToStore: (state, action) => {
      // console.log("adding notes data", action.payload);

      state.categories = action.payload;
    },

    addCategoryToStore: (state, action) => {
      // console.log("adding", action.payload);

      state.categories.push(action.payload);
      // console.log("state in add category", JSON.stringify(state.notes));
    },

    // addSubCategoryToStore: (state, action) => {
    //   const { categoryId, subCategory } = action.payload;
    //   //   console.log('add note info',action.payload);
    //   // console.log('subCategory == ',{categoryId,subCategory})
    //   // const categoryIdx = state.categories.findIndex((n) => {
    //   //   return n.categoryId === categoryId;
    //   // });

    //   // state.subCategories.push({categoryId,subCategory})

    //   // if (!state.notes && categoryIdx === -1) return;
    //   // state.categories[categoryIdx].subCategories.push(subCategory);
    // },



    addSubcategoriesToStore: (state, action) => {
      console.log('paylaod ', action.payload)
      state.subCategories = action.payload
    },
    addNote: (state, action) => {
      const { _, subCategoryId, notes } = action.payload; 
      console.log('adding notes') 
      console.log('subCategoryId',subCategoryId) 
      // console.log('notes',notes) 
      // // const categoryIdx = state.notes.findIndex(
      // //   (n) => n.categoryId === categoryId
      // // );



        const subCategoryIdx = state.subCategories.findIndex(
          (n) => n._id === subCategoryId
        );
        
        // console.log('subCategoryIdx',JSON.parse(JSON.stringify(state.subCategories))) 
        console.log('subCategoryIdx', subCategoryIdx) 
        if(subCategoryIdx !== -1){
          
          state.subCategories[subCategoryIdx].notes = notes
        }

      // // console.log('noteidx', JSON.parse(JSON.stringify(state.notes[categoryIdx].categoryNotes[categoryNoteIdx])) )
      // // console.log("note",note)
      // // state.notes[categoryIdx].subCategories[categoryNoteIdx].notes = notes;
    },
  },
});

export const { addCategoryToStore, addSubcategoriesToStore, addNote, addingTheFetchedDataToStore } = noteSlice.actions;
export default noteSlice.reducer;
