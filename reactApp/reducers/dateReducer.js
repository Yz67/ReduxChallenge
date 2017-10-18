
const defaultState = {
  selectedDate: new Date(),
  appointments: [

  ]
}
for(var i =0; i < 8;i++){
  var newArr = [];
  for(var j =0; j < 8; j++){
    newArr.push({
      name: '',
      phoneNumber: null
    })
  }
  defaultState.appointments.push(newArr);
}
const dateReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'CHANGE_DATE':
        const newState = {...state};

        var newDate = new Date();
        newDate.setDate(newDate.getDate() + action.dateDifference);
        newState.selectedDate = newDate;
        return newState;
      case 'SET_APPOINTMENT':
        console.log("ACTION", action);
        const anotherState = {...state};
        const newAppointments = [...anotherState.appointments];
        const today = new Date();
        const dayIndex = Math.round((state.selectedDate - today)/ (1000*60*60*24));
        newAppointments[dayIndex][action.appointmentIndex] = {
          name: action.contactName,
          phoneNumber: action.phoneNumber
        };

        anotherState.appointments = newAppointments;
        return anotherState;
      default:
        return state;
    }
}

export default dateReducer;
