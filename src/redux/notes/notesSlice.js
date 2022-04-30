import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    searcher: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    changeSearcher: (state, action) => {
      state.searcher = action.payload;
    },
  },
});

export const { addNote, changeSearcher } = notesSlice.actions;
export default notesSlice.reducer;
