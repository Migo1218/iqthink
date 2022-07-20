import { configureStore } from "@reduxjs/toolkit";
import adventures from "./slices/adventuresSlice"

export const store = configureStore({
    reducer:{
        adventures
    }
})