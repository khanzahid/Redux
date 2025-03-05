import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})


export const counterActions = counterSlice.actions;
export default store