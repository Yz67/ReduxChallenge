//var actionExample = { type: "SET_COLOR", color: "yellow" };
// { color: "yellow" }

const reducer = (state = { color: "pink" }, action) => {
  console.log("action", action);
  switch(action.type) {
    case "SET_COLOR":
      return { color: action.color }
    default:
      return state;
  }
}

export default reducer;
