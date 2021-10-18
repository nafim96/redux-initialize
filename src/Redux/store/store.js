import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/amountReducer";

const initialState = {};

export const reducers = combineReducers( {
    amount: reducer
} );

export const store = createStore( reducers, initialState, applyMiddleware( thunk ) );