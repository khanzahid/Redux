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
        },
        add: (state, action) => {
            return state + Number(action.payload)
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