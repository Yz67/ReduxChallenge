// import * as types from '../actions/types';
// import words from '../dictionary';
import { _ } from 'underscore';

const initialState = [];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const times = [9, 10, 11, 12, 1, 2, 3, 4, 5];

days.map((day) => {
    times.map((time) => {
        initialState.push({time: time, day: day, name: '', number: ''})
    })
})

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_STATES':
            const item = state.find((stateItem) => {
                return stateItem.time === action.time && stateItem.day === action.day;
            });
            const newItem = { time: item.time, day: item.day, name: action.name, number: action.number }
            const stateCopy = [];
            state.map((item) => {
                if (item.time === newItem.time && item.day === newItem.day) {
                    stateCopy.push(newItem)
                } else {
                    stateCopy.push(item)
                }
            })
            return stateCopy
        default:
            return state;
    }
};

export { mainReducer };
