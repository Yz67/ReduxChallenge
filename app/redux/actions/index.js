/*
    app/redux/actions/index.js
    Actions creators are defined here, with action types imported from ./types.js
*/

import types from './types';

const setStart = newStart => ({
    /*
        creates a SET_START action which updates what
        day 0 of the schedule corresponds to on the scheduler

        Args:
            newStart (Date): New start date
        Returns:
            Object: the SET_START action
    */
    type: types.SET_START,
    start: newStart,
});

const setAppoint = appointment => ({
    /*
        creates a SET_APPOINTMENT action which updates
        the current day in the scheduler with the information
        in `appointment`

        Args:
            appointment (Object): The appointment object as below for updating
                the current day
                {
                    name (String): name of the appointmentee
                    phone (String): phone number of the appointmentee
                }
        Returns:
            Object: the SET_APPOINTMENT action
    */
    type: types.SET_APPOINTMENT,
    info: appointment,
});

const setDay = day => ({
    /*
        creates a SET_DAY action which updates
        the current day (0-indexed), to `day`

        Args:
            day (Number): The index (0-indexed) of the day to change to
        Returns:
            Object: the SET_DAY action
    */
    type: types.SET_DAY,
    day,
});

const actions = {
    setStart,
    setAppoint,
    setDay,
};

export default actions;
