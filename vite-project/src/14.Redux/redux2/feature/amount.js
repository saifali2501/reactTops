import { createSlice } from "@reduxjs/toolkit";

const amounRed = createSlice({
  name: "amount",
  initialState: { amount: 877 },
  reducers: {
    InxreamentAmount: (state, action) => {
      console.log("========= action=========>", action)
      state.amount ++;
    },
    intTen:(state,action)=>{
        state.amount += 10
    }
  },
  extraReducers: (builder) => {
    builder.addCase("count/incHandler", (state, action) => {
      state.amount += 10;
    });
  },

});

export default amounRed.reducer
export const {InxreamentAmount,intTen} = amounRed.actions