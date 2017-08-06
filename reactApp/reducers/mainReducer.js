const hours = [
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM'
]

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

let initialState = [];

days.forEach(function(day){
  hours.forEach(function(hour){
    let newBox = {hour: hour, day: day, status: true};
    initialState.push(newBox);
  })
})

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_EVENT': {
      const newState = [...state];
      newState.forEach(function(box){
        if(box.day === action.day && box.hour === action.hour){
          box.status = false;
          box.name = action.name;
          box.number = action.number;
        }
      });

      return newState;
    }
    default:
      return state
  }
}

export default mainReducer;
