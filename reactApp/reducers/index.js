//import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import AppointmentReducer from './AppointmentReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    AppointmentReducer
});

export default rootReducer;
