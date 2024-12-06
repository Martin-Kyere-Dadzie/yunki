import { configureStore } from "@reduxjs/toolkit";
import trendSlice from './trendSlice';
import wishSlice from "./wishSlice";

const store = configureStore({
    reducer:{
        topTrends: trendSlice.reducer,
        wishListed: wishSlice.reducer
    }
})

export default store