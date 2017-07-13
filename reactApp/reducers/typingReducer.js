const typingReducer = (state = {}, action) => {
    switch(action.type) {
        case 'TYPE':
            const copyState = Object.assign({}, state);
            copyState[action.key] = action.letters
            return copyState;
        default:
            return state;
    }
};

export default typingReducer;
