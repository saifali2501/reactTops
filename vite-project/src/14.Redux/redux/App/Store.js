import { configureStore } from "@reduxjs/toolkit";
import countSlic from "../feature/Count"
import amountRedux from "../feature/Amount"
import PointRedux from "../feature/Point"
import UserRedux from "../feature/User"


export default configureStore({
    reducer:{
        COUNT:countSlic,
        AMOUNT:amountRedux,
        POINT: PointRedux,
        USER:UserRedux

    }
})
// let store ={
//     COUNT:{
//         count:999,
//     }
// }