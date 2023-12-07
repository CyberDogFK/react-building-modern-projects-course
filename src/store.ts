import {createStore, combineReducers} from "redux";
import {todos} from './todos/reduces';

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
