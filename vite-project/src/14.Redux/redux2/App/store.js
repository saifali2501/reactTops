import { configureStore } from "@reduxjs/toolkit";
import amounRed from "../feature/amount";
import countRed from "../feature/count"
export default configureStore({
  reducer: {
    AMOUNT: amounRed,
    COUNT:countRed
  },
});
