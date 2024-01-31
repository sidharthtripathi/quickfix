import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    categories: [],
  },

  reducers: {
    addCategory: (state, action) => {
        console.log('adding',action.payload)
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = noteSlice.actions;
export default noteSlice.reducer;
