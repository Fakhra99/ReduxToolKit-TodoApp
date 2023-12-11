import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [], // Set initialState to an empty array
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    updateTodo: (state, action) => {
      const { id, todo } = action.payload;
      const updatingTodo = state.find((item) => item.id === id);
      if (updatingTodo) {
        updatingTodo.todo = todo;
      }
    },

    deleteTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
