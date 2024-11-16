import { configureStore } from "@reduxjs/toolkit";
import trendSlice from './trendSlice';

const store = configureStore({
    reducer:{
        topTrends: trendSlice.reducer
    }
})

export default store