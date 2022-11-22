
import { createStore, compose, applyMiddleware } from "redux"

import thunk from "redux-thunk"
import { weatherReducer } from "./reducers/weatherReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(weatherReducer, composeEnhancers(applyMiddleware(thunk)))