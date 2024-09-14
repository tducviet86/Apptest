import { createSlice } from "@reduxjs/toolkit";
const INIT_STATE = {
  list: [],
};
const trashSlice = createSlice({
  name: "trash",
  initialState: INIT_STATE,
  reducers: {
    addTrash: (state, action) => {
      const { payload } = action;
      state.list.push(payload);
    },
    deleteTrash: (state, action) => {
      const { payload } = action;
      state.list = state.list.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addTrash, deleteTrash } = trashSlice.actions;
export default trashSlice.reducer;
