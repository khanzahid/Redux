import { createStore } from "redux";
const reducer = (state = {count: 0}, action) => {
    if (action.type === "INCREMENT") {
        return { count: state.count + 1 };
    }
    return state;
}

const myStore = createStore(reducer);

export default myStore
