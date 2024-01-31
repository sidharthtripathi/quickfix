import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: []

    // notes: [
    //   {
    //     categoryName: "physics ",
    //     categoryId: "id",
    //     categoryNotes: [
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
    addCategory: (state, action) => {
      console.log("adding", action.payload);
      state.notes.push(action.payload);
    },

    addNoteInfo: (state, action) => {
      const { categoryId, info } = action.payload;
      //   console.log('add note info',action.payload);
      const categoryIdx = state.notes.findIndex(
        (n) => n.categoryId === categoryId
      );

      console.log("CATEGORYID", categoryId)
      console.log("state", state)
      console.log('idx',categoryIdx)
      console.log('s',state.notes[categoryIdx])
    },
  },
});

export const { addCategory, addNoteInfo } = noteSlice.actions;
export default noteSlice.reducer;
