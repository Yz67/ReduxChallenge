// name, number, month, day, hour
let scheduledTimes = [];
const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
for(let month = 1; month < 13; month++){
  for(let week = 1; week < 6; week++){
    for(let day = 1; day < 8; day++){
      let time = 9;
      for(let hour = 0; hour < 8; hour++){
        const tempTime = {
          name: '',
          number: 0,
          week: week,
          month: months[month],
          day: day,
          hour: time,
          taken: false
        };
        scheduledTimes.push(tempTime);
        if(time < 12){
          time++;
        }  else if(time === 12){
          time = 1;
        }  else{
          time--;
        }
      }
    }
  }

}
console.log('scheduledTimes: ', scheduledTimes);


const mainReducer = (state = {month: '', week: 0, day: 0, scheduledTimes: scheduledTimes, modalIsOpen: false}, action) => {
	let newState = {};
	switch (action.type) {
		// Missing cases
		case 'SELECT_MONTH':
		  // copy new state so no mutations to old state
		  newState = Object.assign({}, state); // object copy by value
		  // okay to mutate our own copy
		  newState['month'] = action.month;
		  return newState;

    case 'SELECT_WEEK':
		  // copy new state so no mutations to old state
		  newState = Object.assign({}, state); // object copy by value
		  // okay to mutate our own copy
      newState['month'] = state.month;
		  newState['week'] = action.week;
		  return newState;

      case 'SELECT_DAY':
  		  // copy new state so no mutations to old state
  		  newState = Object.assign({}, state); // object copy by value
  		  // okay to mutate our own copy
        newState['month'] = state.month;
  		  newState['week'] = state.week;
        newState['day'] = action.day;
  		  return newState;

      case 'OPEN_MODAL':
        newState = Object.assign({}, state);
        newState['modalIsOpen'] = true;
        return newState;

      case 'CLOSE_MODAL':
        newState = Object.assign({}, state);
        newState['modalIsOpen'] = false;
        return newState;

  		default:
  		  return state;
	}
}

export default mainReducer;
