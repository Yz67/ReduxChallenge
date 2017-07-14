import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import calendar from './calendar';
import modal from './modal';

const mainReducer = combineReducers( {
    routing,
    calendar,
    modal
} );

export default mainReducer;
