import _ from 'underscore';

const initialState = [];
const mainReducer = (state = initialState, action ) => {
  switch (action.type) {
      case 'CHANGE':
        let newState = state;
        newState[action.time]= { person: action.name, number: action.number};
        return newState;
      default:
        return state;
  }
};

export default mainReducer;
