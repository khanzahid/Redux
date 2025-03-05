import {createSlice} from "@reduxjs/toolkit";

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
        },
        subtract: (state, action) => {
            return state - Number(action.payload)
        },
        divide: (state, action) => {
            return state / Number(action.payload)
        }
    }
})

export const counterActions = counterSlice.actions
export default counterSlice