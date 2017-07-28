import { CHANGE_STATES } from './types';

export function changeStates(name, number, time, day) {
    return {
        type: CHANGE_STATES,
        name,
        number,
        time,
        day
    };
}
