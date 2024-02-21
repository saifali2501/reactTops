import { createSlice } from "@reduxjs/toolkit";

const countRed = createSlice({
  name: "count",
  initialState: { count: 100 },
  reducers: {
    incHandler:(state,action)=>{
        state.count ++ ;
    }
  },
 
});
export default countRed.reducer
export const {incHandler} = countRed.actions