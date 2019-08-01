// This file is where we will create our Redux store;
// This file is also where we will pass in middleware/devTools to our Redux store;
// This file is also where we will pass in a reducer function (or reducer functions thanks to combineReducers) to our Redux store;
// This is the file where we will export our Redux store by default so that we can pass it to the Provider component so that our entire component tree is provided with the store;

// IMPORTS;

// combineReducers: it takes in all of your reducer functions and puts the output of those reducer functions as the values for the corresponding keys in your Redux store;
// applyMiddleware: this is a function that takes in any amount of middleware as arguments and then allows your Redux application to use them;
// createStore: this establishes your Redux store that holds your application's state;
// createLogger: it allows you to see in your browser console the action that was just dispatched, the previous state prior to the action being dispatched, and the next state after the action was dispatched;
// thunkMiddleware: because your reducer function ONLY accepts objects, it cannot accept Promises or any other data type/data structure --- so thunkMiddleware will hijack and intercept any action that is dispatched to the Redux store and type check if the value is an object (which the thunkMiddleware will permit to go through to the Redux store) or if it is a function, it will invoke that function, and then dispatch that result to the reducer (ultimately the result is an object);
// thunkMiddleware part II: this allows us to write action creators, make asynchronous calls in that thunk action creator, and give us access to the dispatch method so we can communicate with/to the reducer;

import {combineReducers, applyMiddleware, createStore} from 'redux'; //npm install redux
import {createLogger} from 'redux-logger'; //npm install redux-logger
import thunkMiddleware from 'redux-thunk';//npm install redux-thunk
import {composeWithDevTools} from 'redux-devtools-extension'; //npm install redux-devtools-extension

//reducer functions
import counter from './utilities/counter';

//TODO: import reducer frunctions here

//Construct our redux store using all if the imports we just conducted.
//rootReducer part III: (nameOfReducerA: {valueOfReducerA}, nameOfReducerB: {valueOfReducerB})
const rootReducer = combineReducers({counter});
//logger: read description of createLogger
const logger = createLogger({collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
//store: first argument is your reducers (keep in mine you can have only 1 reducer without having combineReducers involved).
//second argument passed in is the middleware that operates between the actions being dispatched and actions arriving to at the reducer functions
const store = createStore(rootReducer, middleware);

export default store;