import { configureStore } from "@reduxjs/toolkit";
import countSlic from "../feature/Count"

const store = configureStore({
    reducer:{
        COUNT:countSlic,
    }
})
