import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import typingReducer from './typingReducer';
import submitReducer from './submitReducer';


const mainReducer = combineReducers({
    currentData: typingReducer,
    data: submitReducer,
    routing
});

export default mainReducer;
