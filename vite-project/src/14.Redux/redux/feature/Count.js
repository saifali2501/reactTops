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
    incByInput:(state,action)=>{
       console.log("=====",action);
       state.count += +action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase("point/pointInc", (state, action) => {
      state.count += 10;
    });
  },
});

export default countSlic.reducer;
export const { incOne, incTen,incByInput } = countSlic.actions;
