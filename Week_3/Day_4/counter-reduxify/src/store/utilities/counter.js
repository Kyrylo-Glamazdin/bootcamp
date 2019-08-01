//this file will have action types, action creators, a reducer function

//ACTION TYPES
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

//ACTION CREATORS
//action creators are typically called in your react components and are usually involved with event handling
//action types are the way that the mandatory value of our action objects that will be read and processed by the stitch-statement in the reducer function
export const increment = () =>{
	return {
		type: INCREMENT
	}
}

export const decrement = () => {
	return {
		type: DECREMENT
	}
}

//usally put thunks here, but we are not making api call

//REDUCER FUNCTION
//part of the reason why we have to return a default value for our switch statement is because combineReducers will go into our object of reducers and invoke all reducer functions
//to address the incoming action object. without a default statement, we would return undefined, which would replace the state of that value to be undefined
//the other reason for having adefault statement is that when an action is written and is sent to the store, all connected componet will fire off 
//something along the lines of redux.store.getState(), and that should at least have the value of the most up to date state
export default (state = 0, action) => {
	switch (action.type){
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		default:
			return state;
	}
}