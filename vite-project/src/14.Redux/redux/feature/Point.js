import { createSlice } from "@reduxjs/toolkit";

const PointRedux = createSlice({
  name: "point",
  initialState: { point: 99.10 },
  reducers:{
    pointInc:(state,action)=>{
        state.point+= 0.5

    }
  },
  
});

export default PointRedux.reducer
export const {pointInc} = PointRedux.actions