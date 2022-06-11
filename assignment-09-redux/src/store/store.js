import {legacy_createStore} from 'redux'
import { counterReducer } from './counter.reducer';
import{todoReducer} from './todo.reducer'
import thunk from 'redux-thunk';

import { legacy_createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
})

