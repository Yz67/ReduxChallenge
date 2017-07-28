import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
// import gameTimeReducer from './gameReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    main: mainReducer,
});

export default rootReducer;
