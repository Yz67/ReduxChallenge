const modalReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return true;
        case 'CLOSE_MODAL':
            return false;
        case 'MODAL_SUBMIT':
            return false;
        default:
            // console.log('default executed in modal reducer');
            // console.log('action went to default ', action.type);
            return state;
       }
};
export default modalReducer;
