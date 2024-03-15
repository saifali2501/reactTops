import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice"
export default configureStore({
    reducer: {
        authSlice: authReducer,
      },
})
