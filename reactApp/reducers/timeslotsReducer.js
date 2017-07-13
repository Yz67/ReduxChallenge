import _ from 'underscore';

const defaultsched = [9,10,11,12,1,2,3,4,5].map( (time) => {return {
    time: time,
    info: {firstName: '', lastName: '', number: ''},
    occupied: false
}})

// [
//     {time: 9, info: {firstName: 'Pam', lastName: 'Needle', number: '5164261057'}, occupied: true},
//     { time: 10, info: {firstName: '', lastName: '', number: ''}, occupied: false},
//     { time: 11, info: {firstName: '', lastName: '', number: ''}, occupied: false},
//     { time: 12, info: {firstName: '', lastName: '', number: ''}, occupied: false}
// ]
const timeslotsReducer = (state = defaultsched , action) => {
    switch (action.type) {
        case 'MODAL_SUBMIT':
        console.log('modifying timeslot with action values', action.values);
            const slotsCopy = JSON.parse(JSON.stringify(state));
            slotsCopy.forEach( (slot) => {
                if(slot.time === action.values.time) {
                    slot.info.firstName = action.values.firstName;
                    slot.info.lastName = action.values.lastName;
                    slot.info.number = action.values.number;
                    slot.occupied = true;
                }
            });
            // let modifiedSlot = state.find((slot) => slot.time === action.time);
            console.log('modifying time slot', action.values.time);
            return slotsCopy;
        default:
            // console.log('default executed in timeslot reducer');
            return state;
       }
};
export default timeslotsReducer;
