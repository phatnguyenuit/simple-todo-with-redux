import {combineReducers} from 'redux'
import toDoReducer from './toDoReducer';
import filterReducer from './filterReducer';

export default (history) => combineReducers({
    toDoReducer,
    filterReducer,
});