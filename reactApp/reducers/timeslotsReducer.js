import _ from 'underscore';

// let defaultsched =  [9,10,11,12,1,2,3,4,5].map( (time) => {return {
//     time: time,
//     info: {firstName: '', lastName: '', number: ''},
//     occupied: false
// }});
let defaultsched = {};
["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach( (day) => {
    defaultsched[day] = [9,10,11,12,1,2,3,4,5].map( (time) => {
        return {
            time: time,
            info: {firstName: '', lastName: '', number: ''},
            occupied: false
        }
    })
})

const timeslotsReducer = (state = defaultsched , action) => {
    switch (action.type) {
        case 'MODAL_SUBMIT':
            const day = action.values.day;
            const weekCopy = JSON.parse(JSON.stringify(state));

            weekCopy[day].forEach( (slot) => {
                if(slot.time === action.values.time) {
                    slot.info.firstName = action.values.firstName;
                    slot.info.lastName = action.values.lastName;
                    slot.info.number = action.values.number;
                    slot.occupied = true;
                }
            });
            // let modifiedSlot = state.find((slot) => slot.time === action.time);
            console.log('modifying time slot', action.values.time);
            return weekCopy;
        default:
            // console.log('default executed in timeslot reducer');
            return state;
       }
};
export default timeslotsReducer;
