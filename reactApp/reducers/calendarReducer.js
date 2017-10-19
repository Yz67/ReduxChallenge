import * as types from '../actions/types';

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];
const hours = [
  '9:00-10:00',
  '10:00-11:00',
  '11:00-12:00',
  '12:00-1:00',
  '1:00-2:00',
  '2:00-3:00',
  '3:00-4:00',
  '4:00-5:00',
]
const initValues = {
  name: '',
  number: '',
  open: false,
}

const generateState = () => {
  let result = {};
  weekdays.forEach(day => {
    result[day] = {}
    hours.forEach(hour => {
      result[day][hour] = Object.assign({}, initValues)
    })
  })
  return result;
}

const copyState = (state) => {
  let result = {};
  weekdays.forEach(day => {
    result[day] = {}
    hours.forEach(hour => {
      result[day][hour] = Object.assign({}, state[day][hour])
    })
  })
  return result;
}

const initialState = generateState();

const calendarReducer = (state = initialState, action) => {
  let newState = copyState(state);
  switch (action.type) {
    case types.CLOSE_MODAL:
      newState[action.day][action.time].open = false;
      return newState;
    case types.OPEN_MODAL:
      newState[action.day][action.time].open = true;
      return newState;
    case types.CHANGE_NAME:
      newState[action.day][action.time].name = action.name;
      return newState;
    case types.CHANGE_NUMBER:
      newState[action.day][action.time].number = action.number;
      return newState;
    case types.CLEAR_ALL:
      return generateState();
    default:
      return state;
  }
};

export default calendarReducer;
