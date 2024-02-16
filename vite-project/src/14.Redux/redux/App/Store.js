import { configureStore } from "@reduxjs/toolkit";
import countSlic from "../feature/Count"
import amountRedux from "../feature/Amount"
import PointRedux from "../feature/Point"

export default configureStore({
    reducer:{
        COUNT:countSlic,
        AMOUNT:amountRedux,
        POINT: PointRedux

    }
})
// let store ={
//     COUNT:{
//         count:999,
//     }
// }