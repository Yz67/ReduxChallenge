import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import daysReducer from './daysReducer';
import timesReducer from './timesReducer';
import timeSlotReducer from './timeSlotReducer';
// import * as types from '../actions/types';

const mainReducer = combineReducers({
    days: daysReducer,
    times: timesReducer,
    timeSlots: timeSlotReducer,
    routing
});

export default mainReducer;
