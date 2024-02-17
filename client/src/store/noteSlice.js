import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],

    // notes: [
    //   {
    //     categoryName: "physics ",
    //     categoryId: "id",
    //     subCategories: [
    //       {
    //         noteTitle: "thermodynamics",
    //         noteId: "noteId",
    //         noteData: [{...},{...},{...}],
    //       },
    //       {
    //         title: "motion",
    //         noteId: "noteId",
    //         noteData: ["block data"],
    //       },
    //     ],
    //   },
    // ],
  },

  reducers: {
    addingTheFetchedDataToStore: (state, action) => {
      console.log("adding notes data", action.payload);

      state.notes = action.payload;
    },

    addCategoryToStore: (state, action) => {
      console.log("adding", action.payload);

      state.notes.push(action.payload);
      console.log("state in add category", JSON.stringify(state.notes));
    },

    addSubCategoryToStore: (state, action) => {
      const { categoryId, subCategory } = action.payload;
      //   console.log('add note info',action.payload);
      const categoryIdx = state.notes.findIndex((n) => {
        return n.categoryId === categoryId;
      });

      if (!state.notes && categoryIdx === -1) return;
      state.notes[categoryIdx].subCategories.push(subCategory);
    },

    addNote: (state, action) => {
      const { categoryId, noteId, note } = action.payload;  
      const categoryIdx = state.notes.findIndex(
        (n) => n.categoryId === categoryId
      );

      let categoryNoteIdx;
      if (categoryIdx !== -1) {
        categoryNoteIdx = state.notes[categoryIdx].subCategories.findIndex(
          (n) => n.noteId === noteId
        );
      }

      // console.log('noteidx', JSON.parse(JSON.stringify(state.notes[categoryIdx].categoryNotes[categoryNoteIdx])) )
      // console.log("note",note)
      state.notes[categoryIdx].subCategories[categoryNoteIdx].noteData = note;
    },
  },
});

export const { addCategoryToStore, addSubCategoryToStore, addNote, addingTheFetchedDataToStore } = noteSlice.actions;
export default noteSlice.reducer;
