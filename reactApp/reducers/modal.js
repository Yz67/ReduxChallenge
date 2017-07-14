import types from '../actions/types';

export default ( state = { display: false, person: '', phone: '', day: null, time: null }, action ) => {
    switch ( action.type ) {
        case types.clickTime:
            return {
                display: true,
                person: action.person,
                phone: action.phone,
                day: action.day,
                time: action.time
            };
        case types.cancel:
        case types.submit:
            return { display: false, person: '', phone: '', day: null, time: null };
        case types.personChange:
            return Object.assign( {}, state, { person: action.new } );
        case types.phoneChange:
            return Object.assign( {}, state, { phone: action.new } );
        default:
            return state;
    }
};
