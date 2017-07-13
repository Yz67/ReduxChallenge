const submitReducer = (state = [{open: true}, {open: true}, {open: true}, {open: true}, {open: true}, {open: true}, {open: true}, {open: true}, {open: true}], action) => {
    switch(action.type) {
        case 'SUBMIT':
            let copyState = [...state];
            copyState.splice(action.index, 1, action.data)
            return copyState
        case 'CANCEL':
            let copy = [...state];
            copy.splice(action.index, 1, {open: true})
            return copy
        default:
            return state;
    }
};

export default submitReducer;
