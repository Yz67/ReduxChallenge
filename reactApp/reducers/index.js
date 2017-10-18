import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

// import wordListReducer from './wordListReducer';
// import currentIndexReducer from './currentIndexReducer';
// import userInputReducer from './userInputReducer';
// import timerReducer from './timerReducer';
// import pointsReducer from './pointsReducer';

const rootReducer = combineReducers({
  // wordList: wordListReducer,
  // index: currentIndexReducer,
  // userInput: userInputReducer,
  // timer: timerReducer,
  // points: pointsReducer,
  routing,
});

export default rootReducer;
