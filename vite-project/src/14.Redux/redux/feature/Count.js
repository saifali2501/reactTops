import { createSlice } from "@reduxjs/toolkit";
// import { build } from "vite";

const countSlic = createSlice({
  name: "count",
  initialState: { count: 999 },
  reducers: {
    incOne: (state, action) => {
      console.log("----------state-----------", state.count);
      state.count++;
    },
    incTen: (state, action) => {
      state.count += 10;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("point/pointInc", (state, action) => {
      state.count += 10;
    });
  },
});

export default countSlic.reducer;
export const { incOne, incTen } = countSlic.actions;
