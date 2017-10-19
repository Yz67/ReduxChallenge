import { combineReducers } from 'redux';
import dayReducer from './dayReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  appointments: dayReducer,
  modalOpen: modalReducer
});
