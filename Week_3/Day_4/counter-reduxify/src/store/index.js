import {combineReducers, applyMiddleware, createStore} from 'redux'; //npm install redux
import {createLogger} from 'redux-logger'; //npm install redux-logger
import thunkMiddleware from 'redux-thunk';//npm install redux-thunk
import {composeWithDevTools} from 'redux-devtools-extension'; //npm install redux-devtools-extension

//reducer functions
import counter from './utilities/counter';

//TODO: import reducer frunctions here

//Construct our redux store using all if the imports we just conducted.
//rootReducer part III: (nameOfReducerA: {valueOfReducerA}, nameOfReducerB: {valueOfReducerB})
const rootReducer = combineReducers(counter);
//logger: read description of createLogger
const logger = createLogger({collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
//store: first argument is your reducers (keep in mine you can have only 1 reducer without having combineReducers involved).
//second argument passed in is the middleware that operates between the actions being dispatched and actions arriving to at the reducer functions
const store = createStore(rootReducer, middleware);

export default store;