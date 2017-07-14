import actions from '../actions/types';

export default ( state = [], action ) => {
    switch ( action.type ) {
        case actions.addDay:
            const newState = state.slice();
            newState.push( [
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
                {
                    person: '',
                    phone: ''
                },
            ] );
            return newState;
        case actions.submit:
            const newCalendar = state.slice();
            const dayToFix = newCalendar[action.day];
            dayToFix[action.time] = { person: action.person, phone: action.phone };
            newCalendar[action.day] = dayToFix;
            return newCalendar;
        default:
            return state;
    }
};
