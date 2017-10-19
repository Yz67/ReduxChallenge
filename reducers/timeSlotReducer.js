import presets from './presets';
const timeSlotsPerDay = presets.END_TIME - presets.START_TIME + 1;
const numDays = presets.NUM_DAYS;
var timeSlots = new Array(numDays);
timeSlots.fill(new Array(timeSlotsPerDay));
timeSlots.forEach((day)=>day.fill({
  name: '',
  phone: ''
}));

const timeSlotReducer = (state = timeSlots, action) => {
    switch (action.type) {
        case 'UPDATE_SLOT':
          var newState = state.map((day)=>{
            return day.map((slot)=>{
              Object.assign({},slot);
            });
          });
          newState[action.day][action.hour] = {
            name: action.name,
            phone: action.phone
          };
          return newState;
        default:
            return state;
    }
    return state;
};

export default timeSlotReducer;
