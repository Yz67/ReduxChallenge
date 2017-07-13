import * as types from '../actions/types';

const initialState = () => {
  var state = {};
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'];

  for (var i = 0; i < days.length; i++) {
    
    let appts = {};
    for (var j = 0; j < times.length; j++) {
      appts[times[j]] = []; 
    }
    state[days[i]] = appts;
  }

  console.log(state);
  return state;
}


const AppointmentReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case types.APPT_CLICK:
      return newState;
    default: 
      return state;
  }
}

export default AppointmentReducer;