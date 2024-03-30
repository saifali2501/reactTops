import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let loginApi = createAsyncThunk("userLogin", (data) => {
  return axios({
    method: "post",
    url: "http://localhost:9999/user/signin",
    data,
  }).then((res) => {
    console.log("======== res:", res)
    return res.data.data;
    
  });
});
const myuserSlice = createSlice({
  name: "myuser",
  initialState: { myuser: {}, pending: false, error: "" },
  reducers: {
    addmyUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state, action) => {
        // console.log("=======panding======", action);

        state.pending = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        console.log("=========== action====>", action);

        state.myuser = action.payload;
        state.pending = false;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.pending = false;
      });
  },
});

export default myuserSlice.reducer;
export const { addmyUser } = myuserSlice.actions;
