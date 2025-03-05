import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
	name: "counter",
	initialState: 0,
	reducer: {
		decrement: () => {

		},
		increment: () => {

		}
	}
})


const store = configureStore({
	reducer: {
		counter: counterSlice.reducer
	}
});

export const counterActions = counterSlice.actions
export default store;
