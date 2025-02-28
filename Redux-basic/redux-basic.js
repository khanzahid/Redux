const redux = require("redux");

const reducer = (state = 0, action) => {
	if(action.type==="INCREMENT"){
		return state+1
	}
	return state
}
console.log("redux", redux)
const store = redux.createStore(reducer)
console.log("store", store)
const subscirber = () => {
	const currentState = store.getState();
	console.log("current state are", currentState);
}

store.subscribe(subscirber);

store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
