import presets from './presets';
const START_TIME = presets.START_TIME;
const END_TIME = presets.END_TIME;
const getTimeString = function(hour){
  var ending = " AM";
  if(hour > 11){
    hour = hour - 12;
    ending = ' PM';
  }
  if(hour===0){
    hour = 12;
  }
  return hour + ending;
};
var defaultTimes = new Array(END_TIME - START_TIME + 1);
defaultTimes.fill(START_TIME);
defaultTimes = defaultTimes.map((time,index)=>(getTimeString(time+index)));
const timesReducer = (state = defaultTimes, action) => {
    /*switch (action.type) {
        default:
            return state;
    }*/
    return state;
};

export default timesReducer;
