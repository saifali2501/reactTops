import { configureStore, } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice"
import cartReducer from "../feature/Product/Cart"
export default configureStore({
    reducer: {
        authSlice: authReducer,
        cartSlice:cartReducer
      },
})
