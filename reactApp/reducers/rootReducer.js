import { combineReducers } from 'redux';
import timesReducer from './timesReducer';
import entryReducer from './entryReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    times: timesReducer,
    entries: entryReducer
});

export default rootReducer;
