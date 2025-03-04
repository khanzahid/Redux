import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => {
            console.log('current state', state)
            return state + 1
        },
        decrement: (state) => {
            return  state - 1
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})


export const counterActions = counterSlice.actions;
export default store