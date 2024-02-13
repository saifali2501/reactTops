import { createSlice } from "@reduxjs/toolkit";

const countSlic = createSlice ({
    name:"count",
    initialState:{count:100},
    reducers:{},
})

export default countSlic.reducer