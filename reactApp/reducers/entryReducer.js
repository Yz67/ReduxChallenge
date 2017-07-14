
const entryReducer = (state = {}, action) => {
    console.log('state in entry reducer', state);
    console.log('action', action);
    switch (action.type) {
        case 'NEW_ENTRY': {
            const newEntry = {};
            newEntry[action.tag] = {
                name: action.name,
                phone: action.phone
            };

            const newState = Object.assign({}, state, newEntry);
            return newState;
        }
        case 'DELETE_ENTRY': {
            const newState = Object.assign({}, state);
            delete newState[action.tag];
            return newState;
        }
        default:
            return state;
    }
};

export default entryReducer;
