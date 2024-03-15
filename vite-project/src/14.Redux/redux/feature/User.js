import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { users: [] },
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload
    //   state.users = [...state.users, action.payload];
      localStorage.setItem("usr", JSON.stringify(action.payload.users));
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;