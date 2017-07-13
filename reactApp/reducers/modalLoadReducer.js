const modalLoadReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            console.log('toggle modal in modal load reduceer', action.data);
            return {data: action.data}
        // case 'MODAL_SUBMIT':
        //     return {};
        default:
            return state;
       }
};
export default modalLoadReducer;
