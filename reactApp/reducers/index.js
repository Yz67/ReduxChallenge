import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import timeslotsReducer from './timeslotsReducer';
import modalReducer from './modalReducer';
import modalLoadReducer from './modalLoadReducer';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  modalOpen: modalReducer,
  initialFormValues: modalLoadReducer,
  timeslots: timeslotsReducer,
  form: formReducer
})

// const store = createStore(rootReducer)
export default rootReducer;
