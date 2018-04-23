const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
const hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

const initialState = {};
days.forEach((day) => {
    var singleHour = {};
    hours.forEach((hour) => {
        singleHour[hour] = {};
           singleHour[hour].appt = false;
           singleHour[hour].person = null;
           singleHour[hour].phone = null;
        return hour;
    });
    initialState[day] = singleHour;
    return day;
});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_APPT':
            const newState = Object.assign({}, state);
            newState[action.day][action.hour].appt = true;
            newState[action.day][action.hour].person = action.person;
            newState[action.day][action.hour].phone = action.phone;
            return newState;
        case 'NO_APPT':
            const newState2 = Object.assign({}, state);
            newState2[action.day][action.hour].appt = false;
            newState2[action.day][action.hour].person = '';
            newState2[action.day][action.hour].phone = '';
            return newState2;
        default:
            return state;
    }
}

export default reducer;
