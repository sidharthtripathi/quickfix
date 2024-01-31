import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],

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
      console.log("state in add category", JSON.stringify(state.notes));
    },

    addNoteInfo: (state, action) => {
      const { categoryId, info } = action.payload;
      //   console.log('add note info',action.payload);
      const categoryIdx = state.notes.findIndex((n) => {
        console.log('n',n);
        return n.categoryId === categoryId;
      });

      if(!state.notes && categoryIdx === -1) return

      
      console.log("CATEGORYID", categoryId);
      console.log("sssss", state.notes[categoryIdx]);
      console.log("idx", categoryIdx);
      console.log("state", JSON.stringify(state.notes));
      state.notes[categoryIdx].categoryNotes.push(info)
    },
  },
});

export const { addCategory, addNoteInfo } = noteSlice.actions;
export default noteSlice.reducer;
