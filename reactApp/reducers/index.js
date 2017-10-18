import { combineReducers } from 'redux';
import dateReducer from './dateReducer';

const rootReducer = combineReducers({
    dateState: dateReducer
});

export default rootReducer;
