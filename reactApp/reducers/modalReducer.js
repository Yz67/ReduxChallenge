

const reducer = (state = false, action) => {
  switch(action.type) {
    case "OPEN_MODAL":
      return action.index;
    case "CLOSE_MODAL":
      return false;
    default:
      return state;
  }
};

export default reducer;
