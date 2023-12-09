import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [], // Set initialState to an empty array
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id === id);
      if (updatingUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
