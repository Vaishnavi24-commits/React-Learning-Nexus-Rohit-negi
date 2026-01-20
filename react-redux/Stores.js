import { configureStore } from "@reduxjs/toolkit";
import Slicer1 from "./Slicer1"

const store = configureStore({
    reducer:{
        slice1:Slicer1
    }
})
export default store