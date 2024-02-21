import { createSlice } from "@reduxjs/toolkit";

const amountRedux = createSlice({
    name:"amount",
    initialState:{amount:999},
    reducers:{
        amountIncement:(state,action)=>{
            console.log("-------state--",state);
            state.amount++
        },
        amountTen:(state,action)=>{
            state.amount += 10
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase("point/pointInc",(state,action)=>{
            state.amount += 10;
        })
    }
    
});

export default amountRedux.reducer
export const {amountIncement,amountTen} = amountRedux.actions
